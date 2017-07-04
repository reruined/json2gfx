import Type from './Type.js';

export default {
    fromMesh,
};

function flatten(...arrays) {
    return arrays.reduce((result, item) => {
        result.push(...item);
        return result;
    }, []);
}

function fromMesh(gl, mesh) {
    console.assert(gl);
    console.assert(Type.isObject(mesh));
    console.assert(Type.isArray(mesh.positions));
    console.assert('mode' in mesh);

    const components = Object.keys(mesh)
        .map(key => ({ key, value: mesh[key] }))
        .filter(pair => Type.isArray(pair.value))
        .map(pair => ({
            key: pair.key,
            data: new Float32Array(flatten(...pair.value)),
            itemLength: pair.value[0].length
        }));

    /*
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
    */


    const layout = components
        .map(component => {
            console.assert(component.data instanceof Float32Array);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, component.data, gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);

            return {
                // strip trailing 's' for compatibility with shader identifier
                key: component.key.substr(0, component.key.length - 1),
                buffer: buffer,
                type: gl.FLOAT,
                elementLength: component.itemLength,
                normalize: false,
                stride: 0,
                offset: 0,
            };
        });

    return {
        layout: layout,
        vertexCount: components[0].data.length / components[0].itemLength,
        mode: gl[mesh.mode]
    };
}
