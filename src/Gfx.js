'use strict';

import Type from './Type.js';
import MathUtils from './MathUtils.js';
import Mat3 from './Mat3.js';
import Mat4 from './Mat4.js';
import Vec3 from './Vec3.js';
import Vec4 from './Vec4.js';

export default {
    renderScene,
    getGlContext,
    getGlobalTransform
};

function renderScene(canvas, scene) {
    console.group('Gfx');

    updateCanvasSize(canvas);
    console.log(`resized canvas to [${canvas.width.toFixed(0)}, ${canvas.height.toFixed(0)}]`);

    const gl = getGlContext(canvas);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const clearColor = getClearColor(scene);
    clear(gl, clearColor);
    console.log(`cleared canvas with color: [${clearColor.map(num => num.toFixed(0)).join(', ')}]`);

    const camera = getActiveCamera(scene);
    camera.projection = getProjectionMatrix(camera, gl.canvas.width / gl.canvas.height);

    console.log('context:', gl);
    console.log('camera:', camera);
    console.log('scene:', scene);

    const meshNodes = scene.nodes.filter(hasMesh);
    const lightNodes = scene.nodes.filter(hasLight);

    meshNodes.forEach(meshNode => {
            console.log(`rendering mesh node: ${meshNode.key}`);
            renderNode(gl, meshNode, camera);
        });

    lightNodes.forEach(lightNode => {
        console.log(`rendering light node: ${lightNode.key}`);
        renderLight(gl, lightNode, meshNodes, camera);
    });

    console.groupEnd();
}

function clear(gl, color) {
    gl.clearColor(...color);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function renderNode(gl, node, camera) {
    console.assert(hasMesh(node));

    if(hasMesh(node)) {
        drawMesh(gl, node.mesh, {
            shaderProgram: node.shaderProgram,
            uniforms: {
                projection: camera.projection,
                view: Mat4.inverse(camera.globalTransform),
                world: node.globalTransform,
                albedo: getAlbedo(node)
            }
        });
    }
}

function renderLight(gl, lightNode, meshNodes, camera) {
    console.assert(gl);
    console.assert(hasLight(lightNode));
    console.assert(Type.isArray(meshNodes));
    console.assert(Type.isObject(camera));

    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.BLEND);
    meshNodes.forEach(meshNode => {
        drawMesh(gl, meshNode.mesh, {
            shaderProgram: lightNode.shaderProgram,
            uniforms: {
                projection: camera.projection,
                view: Mat4.inverse(camera.globalTransform),
                world: meshNode.globalTransform,
                albedo: getAlbedo(meshNode),
                lightColor: new Float32Array([1, 1, 1, 1]),
                lightDirection: new Float32Array(lightNode.light.direction),
                lightIntensity: lightNode.light.intensity,
            }
        });
    });
    gl.disable(gl.BLEND);
}

function drawMesh(gl, mesh, {shaderProgram, uniforms}) {
    console.assert(gl);
    console.assert(shaderProgram);
    console.assert(Type.isObject(mesh));
    console.assert('layout' in mesh);
    console.assert('vertexCount' in mesh);
    console.assert('mode' in mesh);

    gl.useProgram(shaderProgram);
    bindLayout(gl, shaderProgram, mesh.layout);

    uploadUniforms(gl, shaderProgram, uniforms);
    gl.drawArrays(mesh.mode, 0, mesh.vertexCount);

    unbindLayout(mesh.layout);
    gl.useProgram(null);
}

function uploadUniforms(gl, program, uniforms) {
    Object
        .keys(uniforms)
        .map(key => ({
            location: gl.getUniformLocation(program, key),
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
}

function commitUniform(gl, location, value, key) {
    console.assert(location);
    console.assert(!Type.isUndefined(value));
    console.assert(!Type.isNull(value));

    if(Type.isNumber(value)) {
        if(Number.isInteger(value) && key != 'uvScale') {
            gl.uniform1i(location, value);
        }
        else {
            gl.uniform1f(location, value);
        }
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

function bindLayout(gl, program, layout) {
    console.assert(gl);
    console.assert(gl.isProgram(program));
    console.assert(Type.isArray(layout));

    layout.forEach(item => {
        const location = gl.getAttribLocation(program, item.key);
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
}

function unbindLayout() {

}

function updateCanvasSize(canvas) {
    const width = canvas.parentNode.clientWidth;
    const height = canvas.parentNode.clientHeight;

    if(canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
}

function hasMesh(object) {
    return 'mesh' in object;
}

function hasLight(object) {
    return 'light' in object;
}

function getActiveCamera(scene) {
    return scene.nodes.find(node => node.key === 'camera');
}

function getClearColor(scene) {
    return Vec4.fromValues(0.2, 0.2, 0.2, 1);
}

function getGlContext(canvas) {
    const gl = canvas.getContext('webgl');
    return gl;
}

function getLocalRotationMatrix(object) {
    console.assert(Type.isObject(object));

    const angles = Vec3.parse(object.orientation);
    return Mat3.fromEulerAngles(angles);
}

function getLocalPosition(object) {
    console.assert(Type.isObject(object));
    return Vec3.parse(object.position);
}

function getGlobalRotationMatrix(object) {
    if(!object) {
        return Mat3.identity();
    }

    if('lookat' in object) {
        return Mat3.lookAt(getGlobalPosition(object), object.lookat, [0, 1, 0]);
    }

    const globalParentRotation = getGlobalRotationMatrix(object.parent);
    const localRotation = getLocalRotationMatrix(object);
    return Mat3.multiply(globalParentRotation, localRotation);
}

function getGlobalTransform(object) {
    console.assert(Type.isObject(object));

    const rotation = getGlobalRotationMatrix(object);
    const position = getGlobalPosition(object);
    return Mat4.fromRotationTranslation(rotation, position);
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

function getProjectionMatrix(camera, ar) {
    const near = 'near' in camera ? camera.near : 0.1;
    const far = 'far' in camera ? camera.far : 1000;
    const type = 'perspective';
    const fov = MathUtils.degToRad('fov' in camera ? camera.fov : 90);
    const hFov = 2 * Math.atan(Math.tan(fov / 2) / ar);

    return Mat4.perspective(ar, hFov, near, far);
}

function getAlbedo(object) {
    return 'albedo' in object? object.albedo : [1, 1, 1, 1]
}
