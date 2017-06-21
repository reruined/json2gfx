'use strict';

import Random from 'random-js';
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

import gDebugUvVertSrc from './debug-uv.vert';
import gDebugUvFragSrc from './debug-uv.frag';

import gSandImage from './sand.jpg';
import gSand2Image from './sand2.jpg';
import gFistImage from './fist.jpg';

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
    },
    'debug-uv': {
        vsSrc: gDebugUvVertSrc,
        fsSrc: gDebugUvFragSrc,
    },
};

const gImages = {
    './sand.jpg': gSandImage,
    './sand2.jpg': gSand2Image,
    './fist.jpg': gFistImage
};

const gGlMeshes = new WeakMap();
let gDrawCallCount = 0;

export default json2gfx;

function json2gfx(canvas, model) {
    console.log('json2gfx()');

    const gl = canvas.getContext('webgl');
    let root = model;
    resolveParents(root);
    resolveReferences(root);
    loadTextures(gl, root).then(() => render(gl, root) );
}

function render(gl, root) {
    gDrawCallCount = 0;
    const t0 = performance.now();

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);


    const backColor = parseColor(root.backColor);
    gl.clearColor(...backColor);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const camera = createCamera(root.camera, gl.canvas.width / gl.canvas.height);

    const objectsWithGenerator = ObjectUtils
        .findAll(root.scene, item => 'generator' in item)
        .filter(isVisible);
    objectsWithGenerator
        .forEach(object => {
            object.children = object.children || {};
            const generator = object.generator;
            const randomEngine = Random.engines.mt19937().seed(getSeed(generator));
            for(let i = 0; i < generator.count; i++) {
                const position = randomVec3(
                    randomEngine,
                    generator.min.position,
                    generator.max.position
                );
                const orientation = randomVec3(
                    randomEngine,
                    generator.min.orientation,
                    generator.max.orientation
                );
                object.children[i] = Object.assign(
                    {},
                    generator.template,
                    {
                        position,
                        orientation,
                        _parent: object
                    }
                );
            }

            delete object.generator;
        });

    const objectsWithGeometry = ObjectUtils
        .findAll(root.scene, item => 'geometry' in item)
        .filter(isVisible);

    objectsWithGeometry
        .forEach(object => {
            drawGeometry(gl, object.geometry, {
                shader: 'shader' in object ? object.shader : 'ambient',
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

    const t1 = performance.now();
    console.log(`${gDrawCallCount} draw calls, ${(t1 - t0).toFixed(0)} ms`);
}

function loadTextures(gl, root) {
    return new Promise(resolve => {
        const objectsWithTexture = ObjectUtils
            .findAll(root, item => 'albedo' in item)
            .filter(item => item.albedo.startsWith('./'));

        const promises = objectsWithTexture
            .map(object => {
                return new Promise(resolve => {
                    const texture = gl.createTexture();
                    const img = new Image();
                    img.onload = () => {
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                        const ext = gl.getExtension('EXT_texture_filter_anisotropic');
                        if(ext) {
                            gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, 4);
                        }
                        else {
                        }
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                        gl.generateMipmap(gl.TEXTURE_2D);
                        gl.activeTexture(gl.TEXTURE0);
                        gl.bindTexture(gl.TEXTURE_2D, null);
                        // gl.bindTexture(gl.TEXTURE_2D, texture);

                        object.albedoSampler = texture;
                        resolve();
                    };
                    img.src = gImages[object.albedo];
                });
            });
        Promise.all(promises).then(resolve);
    });
}

function lerp(min, max, interpolator) {
    console.assert(interpolator >= 0);
    console.assert(interpolator <= 1);
    return min + ((max - min) * interpolator);
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

function getGlobalTransform(object) {
    console.assert(Type.isObject(object));

    if(object._computed_globalTransform) {
        return object._computed_globalTransform;
    }

    const rotation = getGlobalRotationMatrix(object);
    const position = getGlobalPosition(object);
    object._computed_globalTransform = Mat4.fromRotationTranslation(rotation, position);
    return object._computed_globalTransform;
}

function getGlobalPosition(object) {
    if(!object) {
        return Vec3.zero();
    }

    if(object._computed_globalPosition) {
        return object._computed_globalPosition;
    }

    const globalParentPosition = getGlobalPosition(object._parent);
    const globalParentRotation = getGlobalRotationMatrix(object._parent);
    const localPosition = getLocalPosition(object);

    object._computed_globalPosition = Vec3.add(
        globalParentPosition,
        Vec3.transform(localPosition, globalParentRotation)
    );

    return object._computed_globalPosition;
}

function getGlobalRotationMatrix(object) {
    if(!object) {
        return Mat3.identity();
    }

    if(object._computed_globalRotationMatrix) {
        return object._computed_globalRotationMatrix;
    }

    const globalParentRotation = getGlobalRotationMatrix(object._parent);
    const localRotation = getLocalRotationMatrix(object);
    object._computed_globalRotationMatrix = Mat3.multiply(globalParentRotation, localRotation);
    return object._computed_globalRotationMatrix;
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
    const hFov = 2 * Math.atan(Math.tan(fov / 2) / ar);
    const projection =
        object.projection === 'perspective' ?
        Mat4.perspective(ar, hFov, object.near, object.far) :
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

    object._parent = parent;

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
            .filter(key => key.charAt(0) !== '_')
            .forEach(key => value[key] = resolveReferences(value[key], root));
    }

    return value;
}

function commitUniform(gl, location, value, key) {
    console.assert(location);
    console.assert(!Type.isUndefined(value));
    console.assert(!Type.isNull(value));

    if(Type.isNumber(value)) {
        gl.uniform1i(location, value);
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
    gl.enable(gl.BLEND);
    props.receivers.forEach(object => {
        const world = getGlobalTransform(object);
        const lightDirection = Vec3.normalize(Vec3.parse(light.direction));
        const lightColor = getColor(light);
        const lightIntensity = getIntensity(light);
        const uniforms = Object.assign({}, props.uniforms, {
            world,
            lightDirection,
            lightColor,
            lightIntensity,
        });

        drawGeometry(gl, object.geometry, {
            shader: props.shader,
            uniforms: uniforms,
        });
    });
    gl.disable(gl.BLEND);
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

function getGlMeshFromGeometry(gl, geometry) {
    if(!gGlMeshes.has(geometry)) {
        gGlMeshes.set(geometry, createGlMesh(gl, Mesh.fromGeometry(geometry)));
    }
    return gGlMeshes.get(geometry);
}

function getUvScale(object) {
    console.assert(Type.isObject(object));
    if('uvScale' in object) {
        return object.uvScale;
    }

    return 1;
}

function drawGeometry(gl, geometry, props = {}) {
    console.assert(gl);
    console.assert(geometry);

    props.uniforms.albedo = props.uniforms.albedo || getAlbedo(geometry);
    props.uniforms.uvScale = props.uniforms.uvScale || getUvScale(geometry);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, null);
    if(geometry.albedoSampler) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, geometry.albedoSampler);
    }

    const mesh = getGlMeshFromGeometry(gl, geometry);
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
                // console.warn(`Missing uniform '${triple.key}' in shader '${shader}'`);
                return;
            }

            commitUniform(gl, triple.location, triple.value, triple.key);
        });

    mesh.layout.forEach((item, index) => {
        const location = gl.getAttribLocation(compiledShader, item.key);
        if(location !== -1) {
            gl.bindBuffer(gl.ARRAY_BUFFER, item.buffer);
            gl.vertexAttribPointer(
                location,
                item.elementLength,
                item.type,
                item.normalize,
                item.stride,
                item.offset
            );
            gl.enableVertexAttribArray(location);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
        }
    });

    // draw
    gDrawCallCount++;
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
    console.log('createGlMesh()');

    const layout = [];

    // prepare position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.positions.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    layout.push(
        {
            key: 'position',
            buffer: positionBuffer,
            type: gl.FLOAT,
            elementLength: mesh.positions.itemSize,
            normalize: false,
            stride: 0,
            offset: 0
        }
    );

    // prepare normal buffer
    if(mesh.normals) {
        const normalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, mesh.normals.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        layout.push(
            {
                key: 'normal',
                buffer: normalBuffer,
                type: gl.FLOAT,
                elementLength: mesh.normals.itemSize,
                normalize: true,
                stride: 0,
                offset: 0,
            }
        );
    }

    // prepare uv buffer
    if(mesh.uvs) {
        const uvBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, mesh.uvs.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        layout.push({
            key: 'uv',
            buffer: uvBuffer,
            type: gl.FLOAT,
            elementLength: mesh.uvs.itemSize,
            normalize: false,
            stride: 0,
            offset: 0,
        });
    }

    return {
        layout: layout,
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
    // gl.bindAttribLocation(program, 0, 'position');
    // gl.bindAttribLocation(program, 1, 'color');
    // gl.bindAttribLocation(program, 2, 'uv');

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

function getAlbedo(object) {
    console.assert(Type.isObject(object));
    if(object._computed_albedo) {
        return object._computed_albedo;
    }

    object._computed_albedo = parseColor(object.albedo);
    return object._computed_albedo;
}

function getSeed(object) {
    console.assert(Type.isObject(object));
    return 'seed' in object ? object.seed : 0;
}

function getColor(node) {
    console.assert(node);
    if(node._computed_color) {
        return node._computed_color;
    }

    node._computed_color = parseColor(node.color);
    return node._computed_color;
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
