import './style.css';

import Shader from './Shader.js';
import ShaderProgram from './ShaderProgram.js';
import model from './model.json';
import vsSrc from './primitive.vert';
import fsSrc from './primitive.frag';

console.log('main');

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

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
    const background = model.background;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(...background);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const vs = Shader.compile(gl, gl.VERTEX_SHADER, vsSrc);
    const fs = Shader.compile(gl, gl.FRAGMENT_SHADER, fsSrc);
    const program = ShaderProgram.compile(gl, vs, fs);
    gl.useProgram(program);
    gl.drawArrays(gl.POINTS, 0, 1);
}
