import './style.css';

import Shader from './Shader.js';
import ShaderProgram from './ShaderProgram.js';
import Type from './Type.js';

import model from './model.json';
import vsSrc from './primitive.vert';
import fsSrc from './primitive.frag';

const TRIANGLE_POSITIONS = new Float32Array([
    0.0, 0.25,
    -0.25, -0.25,
    0.25, -0.25
]);
const TRIANGLE_POSITION_SIZE = 2;

const TRIANGLE_COLORS = new Float32Array([
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
]);
const TRIANGLE_COLOR_SIZE = 3;

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
gl.disable(gl.CULL_FACE);

// resize frame buffer every time window is resized
// window.addEventListener('resize', updateCanvasSize);

updateCanvasSize();
render();

function updateCanvasSize() {
    const width = canvas.parentNode.clientWidth;
    const height = canvas.parentNode.clientHeight;

    if(canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        console.log(`Resized canvas to [${canvas.width}, ${canvas.height}]`);
    }
}

function render() {
    // prepare position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, TRIANGLE_POSITIONS, gl.STATIC_DRAW);
    gl.vertexAttribPointer(
        0,
        TRIANGLE_POSITION_SIZE,
        gl.FLOAT,
        false,
        0,
        0
    );
    gl.enableVertexAttribArray(0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // prepare color buffer
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, TRIANGLE_COLORS, gl.STATIC_DRAW);
    gl.vertexAttribPointer(
        1,
        TRIANGLE_COLOR_SIZE,
        gl.FLOAT,
        false,
        0,
        0
    );
    gl.enableVertexAttribArray(1);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // prepare shader
    const vs = Shader.compile(gl, gl.VERTEX_SHADER, vsSrc);
    const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, fsSrc);
    const program = ShaderProgram.compile(gl, vs, fs);
    gl.bindAttribLocation(program, 0, "position");
    gl.bindAttribLocation(program, 1, "color");
    gl.useProgram(program);

    // prepare framebuffer
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(...toRGBA(model.background));
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, TRIANGLE_POSITIONS.length / TRIANGLE_POSITION_SIZE);
}

function toRGBA(value) {
    let color = null;

    if(Type.isString(value)) {
        color = namedColorToArray(value);
    }

    if(Type.isArray(value)) {
        color = value;
    }

    color = color
        .slice(0, 4)
        .reduce((color, item, index) => {
            color[index] = item;
            return color;
        }, [0, 0, 0, 1]);

    return color;
}

function namedColorToArray(colorName) {
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
