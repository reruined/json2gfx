import './style.css';
import json2gfx from './json2gfx.js';

const DEFAULT_MODEL = 'models/weird-canyon3.json';

const READY_STATE = {
    0: 'UNSENT',
    1: 'OPENED',
    2: 'HEADERS_RECEIVED',
    3: 'LOADING',
    4: 'DONE'
};

let canvas = null;

init();

function init() {
    if(module.hot) {
        //module.hot.accept('./weird-canyon3.json', render);
    }

    canvas = document.querySelector('canvas');
    canvas.addEventListener('click', render);

    window.addEventListener('hashchange', handleHashChange);

    requestModelFile(getHashComponent(window.location.hash));
}

function loadModel(model) {
    render(model);
}

function requestModelFile(path) {
    if(path.length === 0) {
        path = DEFAULT_MODEL;
    }

    requestFile(path)
        .then(response => {
            console.log(`Loading model '${path}'...`);
            loadModel(JSON.parse(response));
        })
        .catch(error => {
            console.error(`Failed to load model '${path}': ${error}`);
        });
}

function getHashComponent(hash) {
    return decodeURIComponent(hash).replace(/^#/, '');
}

function handleHashChange(e) {
    requestModelFile(getHashComponent(e.target.location.hash));
}

function requestFile(path) {
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
            const percentComplete =
                e.lengthComputable ?
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
