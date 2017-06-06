import './style.css';
import json2gfx from './json2gfx.js';
import gModel from './model.json';

const gCanvas = document.querySelector('canvas');
updateCanvasSize();
json2gfx(gCanvas, gModel);

function updateCanvasSize() {
    const width = gCanvas.parentNode.clientWidth;
    const height = gCanvas.parentNode.clientHeight;

    if(gCanvas.width !== width || gCanvas.height !== height) {
        gCanvas.width = width;
        gCanvas.height = height;
        console.log(`Resized canvas to [${gCanvas.width}, ${gCanvas.height}]`);
    }
}
