'use strict';

import Vec3 from './Vec3.js';
import Vec4 from './Vec4.js';
import Mat3 from './Mat3.js';
import Mat4 from './Mat4.js';
import Shader from './Shader.js';
import ShaderProgram from './ShaderProgram.js';
import Type from './Type.js';
import Mesh from './Mesh.js';
import ObjectUtils from './ObjectUtils.js';

import gAmbientVertSrc from './ambient.vert';
import gAmbientFragSrc from './ambient.frag';

import gPointlightVertSrc from './pointlight.vert';
import gPointlightFragSrc from './pointlight.frag';

import gSunlightVertSrc from './sunlight.vert';
import gSunlightFragSrc from './sunlight.frag';

import gShadowVertSrc from './shadow.vert';
import gShadowFragSrc from './shadow.frag';

const gPrograms = {
    ambient: {
        vsSrc: gAmbientVertSrc,
        fsSrc: gAmbientFragSrc,
    },
    pointlight: {
        vsSrc: gPointlightVertSrc,
        fsSrc: gPointlightFragSrc,
    },
    sunlight: {
        vsSrc: gSunlightVertSrc,
        fsSrc: gSunlightFragSrc,
    },
    shadow: {
        vsSrc: gShadowVertSrc,
        fsSrc: gShadowFragSrc
    }
};

export default json2gfx;

function json2gfx(canvas, model) {

    const gl = canvas.getContext('webgl');
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    let root = model;
    root = resolveParents(root);
    root = resolveReferences(root);

    const backColor = parseColor(root.backColor);
    gl.clearColor(...backColor);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const objectsWithGenerator = ObjectUtils
        .findAll(root.scene, item => 'generator' in item)
        .filter(isVisible);
    objectsWithGenerator
        .forEach(object => {
            object.children = object.children || {};
            const generator = object.generator;
            const min = Vec3.parse(generator.min);
            const max = Vec3.parse(generator.max);
            for(let i = 0; i < generator.count; i++) {
                const position = randomVec3(min, max);
                object.children[i] = {
                    position: position,
                    geometry: generator.source,
                };
            }
        });

    const camera = createCamera(root.camera, gl.canvas.width / gl.canvas.height);
    const objectsWithGeometry = ObjectUtils
        .findAll(root.scene, item => 'geometry' in item)
        .filter(isVisible);

    objectsWithGeometry
        .forEach(object => {
            drawGeometry(gl, object.geometry, {
                shader: 'ambient',
                uniforms: {
                    projection: camera.projection,
                    view: camera.view,
                    world: getGlobalTransform(object)
                }
            });
        });

    const objectsWithLight = ObjectUtils
        .findAll(root.scene, item => 'light' in item)
        .filter(isVisible);

    objectsWithLight
        .forEach(object => {

            gl.colorMask(false, false, false, false);
            objectsWithGeometry
                .filter(isShadowCaster)
                .forEach(shadowCaster => {
                    drawProjectedShadow(gl, object.light, {
                        shadowCaster: shadowCaster,
                        uniforms: {
                            view: camera.view,
                            projection: camera.projection
                        }
                    });
                });
            gl.colorMask(true, true, true, true);

            drawLight(gl, object.light, {
                shader: 'sunlight',
                receivers: objectsWithGeometry,
                uniforms: {
                    projection: camera.projection,
                    view: camera.view
                }
            });
        });
    /*
    // get scene root (this decides what will be rendered)
    const sceneRoot = getProperty(root, root, 'scene');

    // get first camera
    //const objectWithCamera = ObjectUtils.find(sceneRoot, item => 'camera' in item);

    // render all geometries
    const objectsWithGeometry = ObjectUtils.findAll(sceneRoot, item => 'geometry' in item);
    objectsWithGeometry.forEach(object => {
        const geometry = getProperty(root, object, 'geometry');
        const transform = getProperty(root, object, 'transform');
        // const camera = getProperty(root, objectWithCamera, 'camera');

        drawGeometry(gl, geometry, {
            shader: 'ambient',
            uniforms: {
                projection: createPerspectiveProjection(1, Math.PI / 2, 0.1, 100),
                view: Mat4.identity(),
                world: createMatrixFromObject(transform)
            }
        });
    });
    */

    /*
    const tree = Tree.fromObject(model);

    // render geometries
    gl.disable(gl.BLEND);
    Tree
        .findAll(tree, node => 'geometry' in node)
        .forEach(node => renderGeometryNode(gl, node));

    // render lights
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    Tree
        .findAll(tree, node => 'light' in node)
        .forEach(node => renderLightNode(gl, node));

*/
}

function lerp(min, max, interpolator) {
    console.assert(interpolator >= 0);
    console.assert(interpolator <= 1);
    return min + ((max - min) * interpolator);
}

function randomReal(min, max) {
    return lerp(min, max, Math.random());
}

function randomVec3(min, max) {
    return Vec3.fromValues(
        randomReal(min[0], max[0]),
        randomReal(min[1], max[1]),
        randomReal(min[2], max[2])
    );
}

function getGlobalTransform(object) {
    console.assert(Type.isObject(object));

    const rotation = getGlobalRotationMatrix(object);
    const position = getGlobalPosition(object);
    const transform = Mat4.fromRotationTranslation(rotation, position);
    return transform;
}

function getGlobalPosition(object) {
    if(!object) {
        return Vec3.zero();
    }

    const globalParentPosition = getGlobalPosition(object.parent);
    const globalParentRotation = getGlobalRotationMatrix(object.parent);
    const localPosition = getLocalPosition(object);

    return Vec3.add(
        globalParentPosition,
        Vec3.transform(localPosition, globalParentRotation)
    );
}

function getGlobalRotationMatrix(object) {
    if(!object) {
        return Mat3.identity();
    }

    const globalParentRotation = getGlobalRotationMatrix(object.parent);
    const localRotation = getLocalRotationMatrix(object);
    return Mat3.multiply(globalParentRotation, localRotation);
}

function getLocalPosition(object) {
    console.assert(Type.isObject(object));
    return Vec3.parse(object.position);
}

function getLocalRotationMatrix(object) {
    console.assert(Type.isObject(object));

    const angles = Vec3.parse(object.orientation).map(degToRad);
    return Mat3.fromEulerAngles(angles);
}

function isShadowCaster(object) {
    console.assert(Type.isObject(object));
    return 'shadow' in object ? object.shadow : true;
}

function getIntensity(object) {
    console.assert(Type.isObject(object));
    return 'intensity' in object ? object.intensity : 1;
}

function isVisible(object) {
    console.assert(Type.isObject(object));
    return 'visible' in object ? object.visible : true;
}

function createCamera(object, ar, convertFovToRadians = true) {
    console.assert(Type.isObject(object));
    console.assert(Type.isNumber(ar) && ar > 0);

    const view = Mat4.lookAt(object.position, object.lookAt, [0, 1, 0]);

    const fov = convertFovToRadians ? degToRad(object.fov) : object.fov;
    const projection =
        object.projection === 'perspective' ?
        Mat4.perspective(ar, fov, object.near, object.far) :
        Mat4.identity();

    return {
        view: Mat4.inverse(view),
        projection
    };
}

function resolveParents(object, parent = null) {
    console.assert(Type.isObject(object));

    Object.keys(object)
        .map(key => object[key])
        .filter(Type.isObject)
        .forEach(child => resolveParents(child, object));

    object.parent = parent;

    return object;
}

function resolveReferences(value, root = value) {
    if(Type.isString(value) && value.charAt(0) === '@') {
        const result = ObjectUtils.resolvePath(
            root,
            value.slice(1)
        );

        if(Type.isUndefined(result)) {
            throw new Error(`Failed to resolve reference '${value}'`);
        }

        return result;
    }

    if(Type.isObject(value)) {
        Object
            .keys(value)
            .filter(key => key !== 'parent')
            .forEach(key => value[key] = resolveReferences(value[key], root));
    }

    return value;
}

function commitUniform(gl, location, value) {
    console.assert(location);
    console.assert(value);

    if(Type.isNumber(value)) {
        gl.uniform1f(location, value);
    }
    if(value.length === 16) {
        gl.uniformMatrix4fv(location, false, value);
    }
    if(value.length === 4) {
        gl.uniform4fv(location, value);
    }
    if(value.length === 3) {
        gl.uniform3fv(location, value);
    }
}

function drawLight(gl, light, props = {}) {
    console.assert(gl);
    console.assert(Type.isObject(light));

    gl.blendFunc(gl.ONE, gl.ONE);
    props.receivers.forEach(object => {
        const uniforms = Object.assign({}, props.uniforms, {
            world: getGlobalTransform(object),
            lightDirection: Vec3.normalize(Vec3.parse(light.direction)),
            lightColor: getColor(light),
            lightIntensity: getIntensity(light)
        });

        gl.enable(gl.BLEND);
        drawGeometry(gl, object.geometry, {
            shader: props.shader,
            uniforms: uniforms,
        });
        gl.disable(gl.BLEND);
    });
}

function drawProjectedShadow(gl, light, props = {}) {
    let lightPos = Vec3.parse(light.direction);
    lightPos = Vec3.normalize(lightPos);
    lightPos = Vec3.scale(lightPos, -1);
    lightPos = Vec3.scale(lightPos, Number.MAX_SAFE_INTEGER);
    let lightMatrix = new Float32Array([
        lightPos[1],  0,            0,           0,
        -lightPos[0], 0, -lightPos[2],          -1,
        0,            0,  lightPos[1],           0,
        0,            0,            0, lightPos[1],
    ]);

    let t = Mat4.identity();
    t = Mat4.multiply(lightMatrix, t);
    t = Mat4.multiply(getGlobalTransform(props.shadowCaster), t);

    drawGeometry(gl, props.shadowCaster.geometry, {
        shader: 'shadow',
        uniforms: {
            world: t,
            view: props.uniforms.view,
            projection: props.uniforms.projection,
        }
    });
}

function drawGeometry(gl, geometry, props = {}) {
    console.assert(gl);
    console.assert(geometry);

    props.uniforms.albedo = props.uniforms.albedo || parseColor(geometry.albedo);

    const mesh = createGlMesh(gl, Mesh.fromGeometry(geometry));
    const shader = props.shader || 'ambient';
    drawMesh(gl, mesh, shader, props);
}

function drawMesh(gl, mesh, shader, {uniforms = {}}) {
    console.assert(gl);
    console.assert(mesh);
    console.assert(shader);

    const compiledShader = getProgram(gl, shader);

    gl.useProgram(compiledShader);
    Object
        .keys(uniforms)
        .map(key => ({
            location: gl.getUniformLocation(compiledShader, key),
            key: key,
            value: uniforms[key]
        }))
        .forEach(triple => {
            if(!triple.location) {
                console.warn(`Missing uniform '${triple.key}' in shader '${shader}'`);
                return;
            }

            commitUniform(gl, triple.location, triple.value);
        });

    mesh.layout.forEach((item, index) => {
        gl.bindBuffer(gl.ARRAY_BUFFER, item.buffer);
        gl.vertexAttribPointer(
            index,
            item.elementLength,
            item.type,
            item.normalize,
            item.stride,
            item.offset
        );
        gl.enableVertexAttribArray(index);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    });

    // draw
    gl.drawArrays(gl.TRIANGLES, 0, mesh.vertexCount);

    // reset state
    mesh.layout.forEach((item, index) => {
        gl.disableVertexAttribArray(index);
    });
    gl.useProgram(null);
}

/*
function renderLightNode(gl, lightNode) {
    const lightProgram = getProgram(gl, lightNode);
    const lightColor = getColor(lightNode);

    const geometryInstances = Tree
        .findAll(Tree.getRoot(lightNode), node => 'geometry' in node)
        .map(node => ({
            camera: getCamera(gl, node),
            transform: resolveTransform(node),
            mesh: getMesh(gl, node),
            color: new Float32Array(getColor(node))
        }));

    geometryInstances.forEach(instance => {
        gl.enable(gl.BLEND);
        renderCommand(gl, {
            program: lightProgram,
            mesh: instance.mesh,
            mode: gl.TRIANGLES,
            uniforms: {
                world: instance.transform,
                view: instance.camera.view,
                projection: instance.camera.projection,
                color: instance.color,
                lightColor: new Float32Array(lightColor),
                lightPos: new Float32Array(lightNode.position),
                lightRadius: lightNode.light.radius || 1,
                lightCutoff: lightNode.light.cutoff || 0,
                lightIntensity: lightNode.light.intensity,
                lightDirection: Vec3.normalize(Vec3.parse(lightNode.light.direction))
            }
        });

        let lightPos = Vec3.parse(lightNode.light.direction);
        lightPos = Vec3.normalize(lightPos);
        lightPos = Vec3.scale(lightPos, -1);
        lightPos = Vec3.scale(lightPos, Number.MAX_SAFE_INTEGER);
        let light = new Float32Array([
            lightPos[1],  0,            0,           0,
            -lightPos[0], 0, -lightPos[2],          -1,
            0,            0,  lightPos[1],           0,
            0,            0,            0, lightPos[1],
        ]);

        let t = Mat4.identity();
        t = Mat4.multiply(instance.camera.projection, t);
        t = Mat4.multiply(instance.camera.view, t);
        t = Mat4.multiply(light, t);
        t = Mat4.multiply(instance.transform, t);

        gl.disable(gl.BLEND);
        renderCommand(gl, {
            program: getProgram(gl, lightNode),
            mesh: instance.mesh,
            mode: gl.TRIANGLES,
            uniforms: {
                world: t,
                view: Mat4.identity(),
                projection: Mat4.identity(),
                color: Vec4.parse(0.0)
            }
        });
    });
}
*/

function createGlMesh(gl, mesh) {
    // prepare position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.positions.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // prepare normal buffer
    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.normals.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    return {
        layout: [
            {
                buffer: positionBuffer,
                type: gl.FLOAT,
                elementLength: mesh.positions.itemSize,
                normalize: false,
                stride: 0,
                offset: 0
            },
            {
                buffer: normalBuffer,
                type: gl.FLOAT,
                elementLength: mesh.normals.itemSize,
                normalize: true,
                stride: 0,
                offset: 0,
            }
        ],
        vertexCount: mesh.positions.data.length / mesh.positions.itemSize
    };
}

function compileShader(gl, vsSrc, fsSrc) {
    console.assert(gl);
    console.assert(Type.isString(vsSrc));
    console.assert(Type.isString(fsSrc));

    const vs = Shader.compile(gl, gl.VERTEX_SHADER, vsSrc);
    const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, fsSrc);
    const program = ShaderProgram.compile(gl, vs, fs);
    gl.bindAttribLocation(program, 0, 'position');
    gl.bindAttribLocation(program, 1, 'color');

    return program;
}

function getProgram(gl, name) {
    console.assert(gl);
    console.assert(Type.isString(name));

    if(!gPrograms[name].glProgram) {
        gPrograms[name].glProgram = compileShader(
            gl,
            gPrograms[name].vsSrc,
            gPrograms[name].fsSrc
        );
    }

    return gPrograms[name].glProgram;
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function getColor(node) {
    console.assert(node);
    return parseColor(node.color);
}

function parseColor(value) {
    if(Type.isString(value)) {
        return Vec4.parse(convertNameToColor(value));
    }

    return Vec4.parse(value);
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
