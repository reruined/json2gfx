'use strict';

import Vec3 from './Vec3.js';
import Vec4 from './Vec4.js';
import Mat3 from './Mat3.js';
import Mat4 from './Mat4.js';
import Shader from './Shader.js';
import ShaderProgram from './ShaderProgram.js';
import Type from './Type.js';
import Tree from './Tree.js';
import Mesh from './Mesh.js';
import Camera from './Camera.js';
import ObjectUtils from './ObjectUtils.js';

import gAmbientVertSrc from './ambient.vert';
import gAmbientFragSrc from './ambient.frag';

import gPointlightVertSrc from './pointlight.vert';
import gPointlightFragSrc from './pointlight.frag';

import gSunlightVertSrc from './sunlight.vert';
import gSunlightFragSrc from './sunlight.frag';

const programs = {
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

    const camera = createCamera(root.camera, gl.canvas.width / gl.canvas.height);
    const objectsWithGeometry = ObjectUtils
        .findAll(root.scene, item => 'geometry' in item)
        .filter(object => isVisible(object));

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
        .filter(object => isVisible(object));

    objectsWithLight
        .forEach(object => {
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

function isVisible(object, defaultValue = true) {
    console.assert(Type.isObject(object));
    console.assert(Type.isBoolean(defaultValue));

    return 'visible' in object ? object.visible : defaultValue;
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

function createMatrixFromObject(object) {
    console.assert(object);

    const translation = Vec3.zero();
    if(object.translation) {
        if(object.translation.x) {
            translation[0] = object.translation.x;
        }
        if(object.translation.y) {
            translation[1] = object.translation.y;
        }
        if(object.translation.z) {
            translation[2] = object.translation.z;
        }
    }

    const rotation = Vec3.zero();
    if(object.rotation) {
        if(object.rotation.x) {
            rotation[0] = degToRad(object.rotation.x);
        }
        if(object.rotation.y) {
            rotation[1] = degToRad(object.rotation.y);
        }
        if(object.rotation.z) {
            rotation[2] = degToRad(object.rotation.z);
        }
    }

    return Mat4.multiply(Mat4.fromEulerAngles(rotation), Mat4.translation(translation));
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
            lightIntensity: 1
        });

        gl.enable(gl.BLEND);
        drawGeometry(gl, object.geometry, {
            shader: props.shader,
            uniforms: uniforms,
        });
        gl.disable(gl.BLEND);

        if(object.shadow) {
            drawProjectedShadow(gl, light, Object.assign({ receiver: object }, props));
        }
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
    t = Mat4.multiply(getGlobalTransform(props.receiver), t);

    drawGeometry(gl, props.receiver.geometry, {
        shader: 'ambient',
        uniforms: {
            world: t,
            view: props.uniforms.view,
            projection: props.uniforms.projection,
            albedo: Vec4.parse(0)
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

    shader = getProgram2(gl, shader);

    gl.useProgram(shader);
    Object
        .keys(uniforms)
        .map(key => ({
            location: gl.getUniformLocation(shader, key),
            value: uniforms[key]
        }))
        .forEach(pair => commitUniform(gl, pair.location, pair.value));

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
    })

    // draw
    gl.drawArrays(gl.TRIANGLES, 0, mesh.vertexCount);

    // reset state
    mesh.layout.forEach((item, index) => {
        gl.disableVertexAttribArray(index);
    });
    gl.useProgram(null);
}

function renderGeometryNode(gl, node) {
    const mesh = getMesh(gl, node);
    const program = getProgram(gl, node);
    const camera = getCamera(gl, node);
    const color = getColor(node);
    const transform = resolveTransform(node);

    if(mesh) {
        renderCommand(gl, {
            program,
            mesh,
            mode: gl.TRIANGLES,
            uniforms: {
                world: transform,
                view: camera.view,
                projection: camera.projection,
                color: new Float32Array(color)
            }
        });
    }
}

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

function getGeometry2(node) {
    console.assert(node);

    if(!node.geometry) {
        return null;
    }

    if(Type.isString(node.geometry)) {

    }
}

function validateProperty() {
    return true;
}

function getProperty(root, node, propertyKey) {
    console.assert(Type.isObject(node));
    console.assert(Type.isString(propertyKey));

    if(!validateProperty(node, propertyKey)) {
        return getDefaultProperty(propertyKey);
    }

    const value = node[propertyKey];
    if(Type.isString(value) && value.charAt(0) === '#') {
        const path = value.slice(value.indexOf('#') + 1);
        return ObjectUtils.resolvePath(root, path);
    }

    return node[propertyKey];
}

function getGeometry(gl, node) {
    console.assert(gl && node);

    if(!node.geometry) {
        return null;
    }

    return Mesh.fromGeometry(node.geometry);
}

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

function getMesh(gl, node) {
    const geometry = getGeometry(gl, node);
    if(!geometry) {
        return null;
    }

    // prepare position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geometry.positions.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // prepare normal buffer
    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geometry.normals.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    return {
        layout: [
            {
                buffer: positionBuffer,
                type: gl.FLOAT,
                elementLength: geometry.positions.itemSize,
                normalize: false,
                stride: 0,
                offset: 0
            },
            {
                buffer: normalBuffer,
                type: gl.FLOAT,
                elementLength: geometry.normals.itemSize,
                normalize: true,
                stride: 0,
                offset: 0,
            }
        ],
        vertexCount: geometry.positions.data.length / geometry.positions.itemSize
    };
}

function getProgram2(gl, programName) {
    const programSrc = programs[programName];

    // prepare shader
    const vs = Shader.compile(gl, gl.VERTEX_SHADER, programSrc.vsSrc);
    const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, programSrc.fsSrc);
    const program = ShaderProgram.compile(gl, vs, fs);
    gl.bindAttribLocation(program, 0, 'position');
    gl.bindAttribLocation(program, 1, 'color');
    gl.useProgram(program);
    return program;
}

function getProgram(gl, node) {
    const programName = Tree.findValueReverse(node, item => item.shader);
    const programSrc = programs[programName];

    // prepare shader
    const vs = Shader.compile(gl, gl.VERTEX_SHADER, programSrc.vsSrc);
    const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, programSrc.fsSrc);
    const program = ShaderProgram.compile(gl, vs, fs);
    gl.bindAttribLocation(program, 0, 'position');
    gl.bindAttribLocation(program, 1, 'color');
    gl.useProgram(program);
    return program;
}

function getCamera(gl, node) {
    const cameraName = Tree.findValueReverse(node, item => item.activeCamera);
    const cameraNode = Tree.findByName(Tree.getRoot(node), cameraName);
    const view = createInverseMatrix(Mat4.lookAt(cameraNode.position, cameraNode.camera.lookAt, [0, 1, 0]));
    const projection = cameraNode.camera.type === 'perspective' ?
        createPerspectiveProjection(
            gl.canvas.width / gl.canvas.height,
            degToRad(cameraNode.camera.fov),
            0.1,
            100
        ) :
        Mat4.orthographic(
            cameraNode.camera.box.left,
            cameraNode.camera.box.right,
            cameraNode.camera.box.bottom,
            cameraNode.camera.box.top,
            cameraNode.camera.box.near,
            cameraNode.camera.box.far,
        );

    return {
        view,
        projection
    };
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function resolveOrientation(node) {
    if(!node) {
        return Mat3.identity();
    }

    const parentOrientation = resolveOrientation(node.parent);
    const localOrientation = getOrientation(node);
    return Mat3.multiply(parentOrientation, localOrientation);
}

function resolvePosition(node) {
    if(!node) {
        return Vec3.zero();
    }

    const parentPosition = resolvePosition(node.parent);
    const parentRotation = resolveOrientation(node.parent);
    const localPosition = Vec3.transform(getPosition(node), parentRotation);
    return Vec3.add(parentPosition, localPosition);
}

function resolveTransform(node) {
    const rotation = resolveOrientation(node);
    const position = resolvePosition(node);

    let transform = Mat4.setTranslation(Mat4.fromMat3(rotation), position);
    return transform;
}

function getOrientation(node) {
    console.assert(node);

    const orientation = Vec3.parse(node.orientation).map(degToRad);
    return Mat3.fromEulerAngles(orientation);
}

function getBackgroundColor(node) {
    console.assert(node);
    return parseColor(node.background);
}

function getColor(node) {
    console.assert(node);
    return parseColor(node.color);
}

function getPosition(node) {
    console.assert(node);
    return Vec3.parse(node.position);
}

function renderCommand(gl, command) {
    // commit unforms to program
    console.assert(gl.isProgram(command.program));

    gl.useProgram(command.program);
    Object.keys(command.uniforms)
        .map(key => ({ key, value: command.uniforms[key] }))
        .forEach(uniform => {
            const location = gl.getUniformLocation(command.program, uniform.key);
            if(Type.isNumber(uniform.value)) {
                gl.uniform1f(location, uniform.value);
            }
            if(uniform.value.length === 16) {
                gl.uniformMatrix4fv(location, false, uniform.value);
            }
            if(uniform.value.length === 4) {
                gl.uniform4fv(location, uniform.value);
            }
            if(uniform.value.length === 3) {
                gl.uniform3fv(location, uniform.value);
            }
        });
    gl.useProgram(null);

    // assign mesh vertices to program
    gl.useProgram(command.program);
    command.mesh.layout.forEach((item, index) => {
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
    })

    // draw
    gl.drawArrays(command.mode, 0, command.mesh.vertexCount);

    // reset state
    command.mesh.layout.forEach((item, index) => {
        gl.disableVertexAttribArray(index);
    });
    gl.useProgram(null);
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
