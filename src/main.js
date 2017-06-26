'use strict';

import './style.css';
import json2gfx from './json2gfx.js';

const modules = {};
let canvas = null;

init();

function init() {
    canvas = document.querySelector('canvas');
    canvas.addEventListener('click', () => {
        requestModelFile(getHashComponent(window.location.hash));
    });

    window.addEventListener('hashchange', handleHashChange);

    requestModelFile(getHashComponent(window.location.hash));

    initContentHmr();
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

                if(getHashComponent(window.location.hash) === pair.key.replace(/^\.\//, '')) {
                    requestModelFile(getHashComponent(window.location.hash));
                    console.log('Reloaded', pair.key);
                }
                else {
                    console.log('Not reloaded', pair.key);
                }
            });
        });
    }
}

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

function getHashComponent(hash) {
    return decodeURIComponent(hash).replace(/^#/, '');
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
