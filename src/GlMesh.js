export default {
    fromMesh,
};

function fromMesh(gl, mesh) {
    const layout = [];

    // prepare position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.positions.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    layout.push(
        {
            key: 'position',
            buffer: positionBuffer,
            type: gl.FLOAT,
            elementLength: mesh.positions.itemSize,
            normalize: false,
            stride: 0,
            offset: 0
        }
    );

    // prepare normal buffer
    if(mesh.normals) {
        const normalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, mesh.normals.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        layout.push(
            {
                key: 'normal',
                buffer: normalBuffer,
                type: gl.FLOAT,
                elementLength: mesh.normals.itemSize,
                normalize: true,
                stride: 0,
                offset: 0,
            }
        );
    }

    // prepare uv buffer
    if(mesh.uvs) {
        const uvBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, mesh.uvs.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        layout.push({
            key: 'uv',
            buffer: uvBuffer,
            type: gl.FLOAT,
            elementLength: mesh.uvs.itemSize,
            normalize: false,
            stride: 0,
            offset: 0,
        });
    }

    return {
        layout: layout,
        vertexCount: mesh.positions.data.length / mesh.positions.itemSize
    };
}
