'use strict';

import './style.css';
import Gfx from './Gfx.js';
import GlMesh from './GlMesh.js';
import Mesh from './Mesh.js';
import Shader from './Shader.js';
import ShaderProgram from './ShaderProgram.js';

const modules = {};
const canvas = document.querySelector('canvas');
let scene = null;

init();

function init() {
    canvas.addEventListener('click', renderScene);
    window.addEventListener('hashchange', reloadModel);
    window.addEventListener('resize', renderScene);

    initContentHmr();
    reloadModel();
}

function initContentHmr() {
    let context = require.context('../content', true, /\.(json|vert|frag|png|jpg)$/);
    context.keys().forEach(key => {
        modules[key] = context(key);
    });

    if(module.hot) {
        module.hot.accept(context.id, () => {
            const newContext = require.context('../content', true, /\.(json|vert|frag|png|jpg)$/);
            const changedModules = newContext.keys()
                .map(key => ({ key: key, 'module': newContext(key) }))
                .filter(pair => modules[pair.key] !== pair.module);

            changedModules.forEach(pair => {
                modules[pair.key] = pair.module;

                reloadModel();
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
        });
    }
}

function reloadModel() {
    scene = createScene();
    renderScene();
}

function createScene() {
    const pathToModelFile = `./${getHashComponent(window.location.hash)}`;
    const model = modules['./models/test2.json'];
    const resources = modules;
    const gl = Gfx.getGlContext(canvas);

    console.time('Scene creation');
    // create an array of nodes, with keys, from the source object
    const nodes = Object
        .keys(model)
        // create key-value pairs
        .map(key => ({ key: key, value: model[key] }))
        // merge key and value into a new node
        .map(pair => Object.assign({}, pair.value, { key: pair.key }));
    console.log(`Created ${nodes.length} nodes`);

    // resolve parents
    nodes.forEach(node => {
        if('parent' in node) {
            const parent = nodes.find(item => item.key === node.parent.substr(1));
            node.parent = parent;
        }
    });

    // calculate globalTransform for all nodes
    nodes.forEach(node => node.globalTransform = Gfx.getGlobalTransform(node));
    console.log('Calculated global transforms');

    // create meshes from geometries
    const meshes = nodes
        .filter(node => 'geometry' in node)
        .map(node => node.geometry)
        .map(Mesh.fromGeometry)
        .map(GlMesh.fromMesh.bind(null, gl));
    console.log(`Created ${meshes.length} meshes`);

    // assign meshes to nodes
    nodes
        .filter(node => 'geometry' in node)
        .forEach((node, index) => node.mesh = meshes[index]);

    // delete geometry from all nodes with a mesh
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => delete node.geometry);

    // create shader programs for all nodes
    const programs = nodes
        .map(node => 'ambient')
        .map(programName => {
            const vsSrc = resources[`./shaders/${programName}.vert`];
            const fsSrc = resources[`./shaders/${programName}.frag`];
            const vs = Shader.compile(gl, gl.VERTEX_SHADER, vsSrc);
            const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, fsSrc);
            return ShaderProgram.compile(gl, vs, fs);
        });
    console.log(`Compiled ${programs.length} shader programs`);

    // assign shaders to nodes
    nodes.forEach((node, index) => node.shaderProgram = programs[index]);

    const scene = { nodes };
    console.timeEnd('Scene creation');

    return scene;
}

function renderScene() {
    console.time('Scene rendering');
    Gfx.renderScene(canvas, scene);
    console.timeEnd('Scene rendering');
}

function getHashComponent(hash) {
    return decodeURIComponent(hash).replace(/^#/, '');
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
