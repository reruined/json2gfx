import Type from './Type.js';

export default {
    fromMesh,
};

function fromMesh(gl, mesh) {
    console.assert(gl);
    console.assert(Type.isObject(mesh));
    console.assert(Type.isArray(mesh.vertices));
    console.assert('mode' in mesh);

    // separate vertex components into 1d arrays
    const components = mesh.vertices.reduce((object, vertex) => {
        Object.keys(vertex).forEach(key => {
            if(key in object === false) {
                object[key] = { data: [], itemLength: vertex[key].length };
            }

            console.assert(vertex[key].length === object[key].itemLength);
            object[key].data.push(...vertex[key]);
        });

        return object;
    }, {});

    // convert arrays into Float32Arrays
    Object.values(components)
        .forEach(component => {
            component.data = new Float32Array(component.data);
        });

    const layout = Object.keys(components)
        .map(key => ({ key, value: components[key] }))
        .map(pair => {
            console.assert(pair.value.data instanceof Float32Array);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, pair.value.data, gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);

            return {
                key: pair.key,
                buffer: buffer,
                type: gl.FLOAT,
                elementLength: pair.value.itemLength,
                normalize: false,
                stride: 0,
                offset: 0,
            };
        });

    return {
        layout: layout,
        vertexCount: components.position.data.length / components.position.itemLength,
        mode: gl[mesh.mode]
    };
}
