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

import gAmbientVertSrc from './ambient.vert';
import gAmbientFragSrc from './ambient.frag';

import gPointlightVertSrc from './pointlight.vert';
import gPointlightFragSrc from './pointlight.frag';

const programs = {
    ambient: {
        vsSrc: gAmbientVertSrc,
        fsSrc: gAmbientFragSrc,
    },
    pointlight: {
        vsSrc: gPointlightVertSrc,
        fsSrc: gPointlightFragSrc,
    }
};

export default json2gfx;

function json2gfx(canvas, model) {
    const gl = canvas.getContext('webgl');
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(...getBackgroundColor(model));
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

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
            }
        });
    });
}


function getGeometry(gl, node) {
    console.assert(gl && node);

    if(!node.geometry) {
        return null;
    }

    return Mesh.fromGeometry(node.geometry);
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
    const cameraName = Tree.findValueReverse(node, item => item.camera);
    const camera = Tree.findByName(Tree.getRoot(node), cameraName);
    const view = createInverseMatrix(Mat4.lookAt(camera.position, camera.lookAt, [0, 1, 0]));

    return {
        view,
        projection: createProjectionMatrix(gl.canvas.width / gl.canvas.height, degToRad(camera.fov), 0.1, 100)
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

    const transform = Mat4.setTranslation(Mat4.fromMat3(rotation), position);
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

function createInverseMatrix(mat) {
    const m = mat;
    let i = 0;
    let det = 0;
    let inv = new Array(16);
    let result = new Array(16);

    inv[0] = m[5]  * m[10] * m[15] -
        m[5]  * m[11] * m[14] -
        m[9]  * m[6]  * m[15] +
        m[9]  * m[7]  * m[14] +
        m[13] * m[6]  * m[11] -
        m[13] * m[7]  * m[10];

    inv[4] = -m[4]  * m[10] * m[15] +
        m[4]  * m[11] * m[14] +
        m[8]  * m[6]  * m[15] -
        m[8]  * m[7]  * m[14] -
        m[12] * m[6]  * m[11] +
        m[12] * m[7]  * m[10];

    inv[8] = m[4]  * m[9] * m[15] -
        m[4]  * m[11] * m[13] -
        m[8]  * m[5] * m[15] +
        m[8]  * m[7] * m[13] +
        m[12] * m[5] * m[11] -
        m[12] * m[7] * m[9];

    inv[12] = -m[4]  * m[9] * m[14] +
        m[4]  * m[10] * m[13] +
        m[8]  * m[5] * m[14] -
        m[8]  * m[6] * m[13] -
        m[12] * m[5] * m[10] +
        m[12] * m[6] * m[9];

    inv[1] = -m[1]  * m[10] * m[15] +
        m[1]  * m[11] * m[14] +
        m[9]  * m[2] * m[15] -
        m[9]  * m[3] * m[14] -
        m[13] * m[2] * m[11] +
        m[13] * m[3] * m[10];

    inv[5] = m[0]  * m[10] * m[15] -
        m[0]  * m[11] * m[14] -
        m[8]  * m[2] * m[15] +
        m[8]  * m[3] * m[14] +
        m[12] * m[2] * m[11] -
        m[12] * m[3] * m[10];

    inv[9] = -m[0]  * m[9] * m[15] +
        m[0]  * m[11] * m[13] +
        m[8]  * m[1] * m[15] -
        m[8]  * m[3] * m[13] -
        m[12] * m[1] * m[11] +
        m[12] * m[3] * m[9];

    inv[13] = m[0]  * m[9] * m[14] -
        m[0]  * m[10] * m[13] -
        m[8]  * m[1] * m[14] +
        m[8]  * m[2] * m[13] +
        m[12] * m[1] * m[10] -
        m[12] * m[2] * m[9];

    inv[2] = m[1]  * m[6] * m[15] -
        m[1]  * m[7] * m[14] -
        m[5]  * m[2] * m[15] +
        m[5]  * m[3] * m[14] +
        m[13] * m[2] * m[7] -
        m[13] * m[3] * m[6];

    inv[6] = -m[0]  * m[6] * m[15] +
        m[0]  * m[7] * m[14] +
        m[4]  * m[2] * m[15] -
        m[4]  * m[3] * m[14] -
        m[12] * m[2] * m[7] +
        m[12] * m[3] * m[6];

    inv[10] = m[0]  * m[5] * m[15] -
        m[0]  * m[7] * m[13] -
        m[4]  * m[1] * m[15] +
        m[4]  * m[3] * m[13] +
        m[12] * m[1] * m[7] -
        m[12] * m[3] * m[5];

    inv[14] = -m[0]  * m[5] * m[14] +
        m[0]  * m[6] * m[13] +
        m[4]  * m[1] * m[14] -
        m[4]  * m[2] * m[13] -
        m[12] * m[1] * m[6] +
        m[12] * m[2] * m[5];

    inv[3] = -m[1] * m[6] * m[11] +
        m[1] * m[7] * m[10] +
        m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] -
        m[9] * m[2] * m[7] +
        m[9] * m[3] * m[6];

    inv[7] = m[0] * m[6] * m[11] -
        m[0] * m[7] * m[10] -
        m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] +
        m[8] * m[2] * m[7] -
        m[8] * m[3] * m[6];

    inv[11] = -m[0] * m[5] * m[11] +
        m[0] * m[7] * m[9] +
        m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] -
        m[8] * m[1] * m[7] +
        m[8] * m[3] * m[5];

    inv[15] = m[0] * m[5] * m[10] -
        m[0] * m[6] * m[9] -
        m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] +
        m[8] * m[1] * m[6] -
        m[8] * m[2] * m[5];

    det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];

    console.assert(det != 0);

    det = 1.0 / det;

    for (i = 0; i < 16; i++) {
        result[i] = inv[i] * det;
    }

    return result;
}

function createProjectionMatrix(ar, fov, near, far) {
    console.assert(far > near);
    console.assert(fov > 0);
    console.assert(fov < Math.PI * 2);
    console.assert(ar > 0);

    const f = 1.0 / Math.tan(fov * 0.5);

    let m = Mat4.identity();
    m[0] = f / ar;
    m[5] = f;
    m[10] = (far + near) / (near - far);
    m[11] = -1.0;
    m[14] = (2.0 * far * near) / (near - far);
    m[15] = 0.0;

    return m;
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
