import './style.css';
import json2gfx from './json2gfx.js';
import gModel from './weird-canyon2.json';

if(module.hot) {
    module.hot.accept('./weird-canyon2.json', render);
}

const gCanvas = document.querySelector('canvas');
render();

function updateCanvasSize() {
    const width = gCanvas.parentNode.clientWidth;
    const height = gCanvas.parentNode.clientHeight;

    if(gCanvas.width !== width || gCanvas.height !== height) {
        gCanvas.width = width;
        gCanvas.height = height;
        console.log(`Resized canvas to [${gCanvas.width}, ${gCanvas.height}]`);
    }
}

function render() {
    updateCanvasSize();
    json2gfx(gCanvas, gModel);
}
