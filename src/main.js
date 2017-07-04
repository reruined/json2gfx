'use strict';

import './style.css';
import MathUtils from './MathUtils.js';
import Random from 'random-js';
import Type from './Type.js';
import Gfx from './Gfx.js';
import GlMesh from './GlMesh.js';
import Mesh from './Mesh.js';
import Shader from './Shader.js';
import ShaderProgram from './ShaderProgram.js';
import Vec3 from './Vec3.js';
import Vec4 from './Vec4.js';

const modules = {};
let animationFrameId = null;

initContentHmr();
init();

function init() {
    const canvas = document.querySelector('canvas');

    canvas.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    restart();
}

function restart() {
    console.log('%cRestarting...', 'font-weight:bold');
    const canvas = document.querySelector('canvas');
    const scene = loadScene(canvas, getUrlParameters(window.location));

    cancelAnimationFrame(animationFrameId);
    startRenderLoop(canvas, scene, getUrlParameters(window.location));
}

function initContentHmr() {
    let context = require.context('../content', true, /\.(js|json|vert|frag|png|jpg)$/);
    context.keys().forEach(key => {
        modules[key] = context(key);
    });

    if(module.hot) {
        module.hot.accept(context.id, () => {
            const newContext = require.context('../content', true, /\.(js|json|vert|frag|png|jpg)$/);
            const changedModules = newContext.keys()
                .map(key => ({ key: key, 'module': newContext(key) }))
                .filter(pair => modules[pair.key] !== pair.module);

            changedModules.forEach(pair => {
                modules[pair.key] = pair.module;
                /*
                if(getHashComponent(window.location.hash) === pair.key.replace(/^\.\//, '')) {
                    reloadModel();
                    console.log('Reloaded', pair.key);
                }
                else {
                    console.log('Not reloaded', pair.key);
                }
                */
            });
            restart();
        });
    }
}

function handleClick() {
    restart();
}

function handleHashChange() {
    restart();
}

function handleResize() {
    restart();
}

function expandTemplates(object) {
    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => isTemplate(pair.value))
        .forEach(pair => {
            console.assert(isTemplate(pair.value));

            const engine = Random.engines.mt19937().seed(pair.value.seed);
            object[pair.key] = Array(pair.value.count).fill(null)
                .map(() => {
                    const minOrientation = pair.value.orientation.min;
                    const maxOrientation = pair.value.orientation.max;
                    return Object.assign({}, pair.value.template, {
                        position: randomVec3(engine, pair.value.position.min, pair.value.position.max),
                        orientation: randomVec3(engine, minOrientation, maxOrientation),
                        scale: randomVec3(engine, pair.value.scale.min, pair.value.scale.max),
                    });
                });
        });

    Object.values(object)
        .filter(Type.isObject)
        .filter(value => !Type.isArray(value))
        .forEach(expandTemplates);
}

function evaluateFunctions(object) {
    console.assert(Type.isObject(object));

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => isProceduralFunction(pair.value))
        .forEach(pair => {
            const func = modules[`./procedural/${pair.value.function}.js`].default;
            const result = func(pair.value.params);

            console.log(`Procedure '${pair.value.function}' evaluated to '${Type.getName(result)}':`, result);
            object[pair.key] = result;
        });

    Object.values(object)
        .filter(Type.isObject)
        .filter(value => !Type.isArray(value))
        .forEach(evaluateFunctions);
}

function isProceduralFunction(value) {
    if(!Type.isObject(value)) {
        return false;
    }

    if('function' in value === false) {
        return false;
    }

    return true;
}

function isTemplate(value) {
    if(!Type.isObject(value)) {
        return false;
    }

    if(Type.isArray(value)) {
        return false;
    }

    if('template' in value === false) {
        return false;
    }

    console.assert(Type.isNumber(value.count));
    console.assert(Type.isNumber(value.seed));

    return true;
}

function convertDegreesToRadians(object) {
    console.assert(Type.isObject(object));

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => pair.key.match(/orientation|rotation/))
        .forEach(pair => {
            object[pair.key] = pair.value.map(MathUtils.degToRad);
        });

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => Type.isObject(pair.value))
        .forEach(pair => convertDegreesToRadians(pair.value));
}

function convertColorsToRGBA(object) {
    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => pair.key === 'albedo')
        .forEach(pair => object[pair.key] = parseColor(pair.value));

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => Type.isObject(pair.value))
        .forEach(pair => convertColorsToRGBA(pair.value));
}

function loadScene(canvas, { scene: scenePath }) {
    console.group(`Loading scene '${scenePath}'`);

    const model = JSON.parse(JSON.stringify(modules[`./${scenePath}`]));
    const resources = modules;
    const gl = Gfx.getGlContext(canvas);

    console.time('Scene creation');

    // convert albedos to RGBA
    convertColorsToRGBA(model);

    // expand templates
    expandTemplates(model);

    // evaluate functions
    evaluateFunctions(model);

    // convert degrees to radians
    convertDegreesToRadians(model);

    // extract nodes from 'children' arrays
    Object.keys(model)
        .map(key => ({ key: key, value: model[key] }))
        .filter(pair => 'children' in pair.value)
        .forEach(pair => {
            pair.value.children.forEach((child, index) => {
                child.parent = `@${pair.key}`;
                model[`${pair.key}.${index}`] = child;
            });
            delete pair.value.children;
        });

    // create an array of nodes, with keys, from the source object
    const nodes = Object
        .keys(model)
        // create key-value pairs
        .map(key => ({ key: key, value: model[key] }))
        // merge key and value into a new node
        .map(pair => Object.assign({}, pair.value, { key: pair.key }));
    console.log(`Created ${nodes.length} nodes`);

    // resolve references
    nodes
        .forEach(node => {
            Object.keys(node)
                .filter(key => Type.isString(node[key]))
                .filter(key => node[key].startsWith('@'))
                .map(key => ({ key: key, ref: node[key].substr(1) }))
                .forEach(pair => node[pair.key] = nodes.find(item => item.key === pair.ref));
        });

    // resolve parents
    nodes
        .filter(node => Type.isString(node.parent))
        .forEach(node => {
            const parent = nodes.find(item => item.key === node.parent.substr(1));
            node.parent = parent;
        });

    // calculate globalTransform for all nodes
    nodes.forEach(node => node.globalTransform = Gfx.getGlobalTransform(node));
    console.log('Calculated global transforms');

    // create meshes from geometries
    let meshCount = 0;
    const meshes = nodes
        .filter(node => 'geometry' in node)
        .map(node => node.geometry)
        .reduce((meshes, geometry) => {
            if(!meshes.get(geometry)) {
                meshes.set(geometry, Mesh.fromGeometry(geometry));
                meshCount++;
            }

            return meshes;
        }, new WeakMap());
    console.log(`Created ${meshCount} meshes`);

    // assign meshes to nodes
    nodes
        .filter(node => 'geometry' in node)
        .forEach(node => node.mesh = meshes.get(node.geometry));

    let glMeshCount = 0;
    const glMeshes = nodes
        .filter(node => 'mesh' in node)
        .map(node => node.mesh)
        .reduce((glMeshes, mesh) => {
            if(!glMeshes.get(mesh)) {
                glMeshes.set(mesh, GlMesh.fromMesh(gl, mesh));
                glMeshCount++;
            }

            return glMeshes;
        }, new WeakMap());
    console.log(`Created ${glMeshCount} GlMesh`);

    // assign meshes to nodes
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => node.mesh = glMeshes.get(node.mesh));

    // delete geometry from all nodes with a mesh
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => delete node.geometry);

    // assign default program names to all nodes
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => node.shaderProgram = 'ambient');
    nodes
        .filter(node => 'light' in node)
        .forEach(node => node.shaderProgram = 'sunlight');

    // compile unique programs
    const programs = nodes
        .filter(node => 'shaderProgram' in node)
        .map(node => node.shaderProgram)
        .reduce((compiledPrograms, programName) => {
            if(programName in compiledPrograms === false) {
                const vsSrc = resources[`./shaders/${programName}.vert`];
                const fsSrc = resources[`./shaders/${programName}.frag`];
                const vs = Shader.compile(gl, gl.VERTEX_SHADER, vsSrc);
                const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, fsSrc);
                const program = ShaderProgram.compile(gl, vs, fs);
                compiledPrograms[programName] = program;
            }

            return compiledPrograms;
        }, {});
    console.log(`Compiled ${Object.keys(programs).length} shader programs`);

    // assign programs to nodes
    nodes
        .filter(node => 'shaderProgram' in node)
        .forEach(node => node.shaderProgram = programs[node.shaderProgram]);

    const scene = { nodes };
    console.timeEnd('Scene creation');

    console.groupEnd();
    return scene;
}

function startRenderLoop(canvas, scene, { single = false }) {
    console.assert(Type.isBoolean(single));
    console.log(`Starting render loop... (single = ${single})`);
    let totalTimeLastFrame = performance.now();
    animationFrameId = requestAnimationFrame(loop);

    function loop(totalTime) {
        const deltaTime = totalTime - totalTimeLastFrame;

        Gfx.renderScene(canvas, scene, { total: totalTime, delta: deltaTime });
        totalTimeLastFrame = totalTime;

        if(!single) {
            animationFrameId = requestAnimationFrame(loop);
        }
    }
}

function randomVec3(engine, min, max) {
    const distX = Random.real(min[0], max[0], true);
    const distY = Random.real(min[1], max[1], true);
    const distZ = Random.real(min[2], max[2], true);
    return Vec3.fromValues(
        distX(engine),
        distY(engine),
        distZ(engine)
    );
}

function getUrlParameters(location) {
    console.assert('hash' in location);

    const parameters = decodeURIComponent(location.hash).match(/(?=[^#])[^&\s]+=[^&\s]+/g)
        .reduce((object, match) => {
            const [key, value] = match.split('=');
            object[key] = parseString(value);

            return object;
        }, {});

    return parameters;
}

function parseColor(value) {
    if(Type.isString(value)) {
        return Vec4.parse(convertNameToColor(value));
    }

    return Vec4.parse(value);
}

function parseString(string) {
    console.assert(Type.isString(string));

    if(string === '') {
        return string;
    }

    if(string === 'true') {
        return true;
    }

    if(string === 'false') {
        return false;
    }

    if(!isNaN(string)) {
        return +string;
    }

    return string;
}

function convertNameToColor(colorName) {
    const element = document.createElement('div');
    element.style.color = colorName;

    document.body.appendChild(element);
    const rawColor = getComputedStyle(element).color;
    document.body.removeChild(element);

    const color = rawColor.match(/\d+/g)
        .map(item => parseInt(item))
        .map(item => item / 255);

    return color;
}

/*
function loadModel(model) {
    render(model);
}

function requestModelFile(path) {
    const DEFAULT_MODEL = 'models/weird-canyon3.json';

    if(path.length === 0) {
        path = DEFAULT_MODEL;
    }

    requestFile(path)
        .catch(error => {
            console.error(`Failed to load model '${path}': ${error}`);
        })
        .then(response => {
            console.log(`Loading model '${path}'...`);
            loadModel(JSON.parse(response));
        });
}

function handleHashChange(e) {
    requestModelFile(getHashComponent(e.target.location.hash));
}

function requestFile(path) {
    const READY_STATE = Object.freeze({
        0: 'UNSENT',
        1: 'OPENED',
        2: 'HEADERS_RECEIVED',
        3: 'LOADING',
        4: 'DONE'
    });

    return new Promise(executor);

    function executor(resolve, reject) {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', handleReadyStateChange);
        request.addEventListener('progress', handleProgress);
        request.addEventListener('load', handleLoad);
        request.addEventListener('error', handleError);
        request.addEventListener('abort', handleAbort);
        request.open('GET', path);
        request.send();

        function handleReadyStateChange(e) {
            const readyState = READY_STATE[e.target.readyState];
            if(readyState === 'LOADING') {
                return;
            }

            console.log(`${path}: ${READY_STATE[e.target.readyState]} [${e.target.status}]`);
        }

        function handleProgress(e) {
            const ratio = ((e.loaded / e.total) * 100).toFixed(1);
            const percentComplete = e.lengthComputable ?
                `${ratio}%` :
                '<N/A>';

            const loaded = bytesToHumanReadable(e.loaded);
            const total = bytesToHumanReadable(e.total);

            console.log(`${path}: ${percentComplete} (${loaded}/${total}) [${e.target.status}]`);
        }

        function handleLoad(e) {
            console.log(`${path}: LOAD`);

            if(e.target.status === 200 || e.target.status === 0) {
                resolve(e.target.responseText);
            }

            reject(new Error(e.target.statusText));
        }

        function handleError(e) {
            console.log(`${path}: ERROR`);
            reject(new Error(e.target.statusText));
        }

        function handleAbort(e) {
            console.log(`${path}: ABORT`);
            reject(new Error(e.target.statusText));
        }
    }
}

function bytesToHumanReadable(bytes) {
    if(bytes > Math.pow(1000, 2)) {
        return `${(bytes/Math.pow(1000, 2)).toFixed(2)}MB`;
    }
    if(bytes > Math.pow(1000, 1)) {
        return `${(bytes/Math.pow(1000, 1)).toFixed(0)}kB`;
    }

    return `${bytes}B`;
}

function updateCanvasSize() {
    const width = canvas.parentNode.clientWidth;
    const height = canvas.parentNode.clientHeight;

    if(canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        console.log(`Resized canvas to [${canvas.width}, ${canvas.height}]`);
    }
}

function render(model) {
    updateCanvasSize();
    json2gfx(canvas, model);
}
*/
