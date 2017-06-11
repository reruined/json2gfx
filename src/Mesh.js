import Type from './Type.js';

export default {
    fromGeometry
}

function fromGeometry(geometry) {
    console.assert(geometry);

    if(geometry.shape === 'triangle') {
        return {
            positions: {
                itemSize: 2,
                data: getTrianglePositions(geometry.size || 1)
            },
            normals: {
                itemSize: 3,
                data: getTriangleNormals()
            }
        };
    }

    if(geometry.shape === 'plane') {
        return {
            positions: {
                itemSize: 2,
                data: getPlanePositions(geometry.size || 1)
            },
            normals: {
                itemSize: 3,
                data: getPlaneNormals()
            }
        };
    }
}

function getTrianglePositions(scale) {
    return new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
    ])
        .map(item => item * scale);
}

function getTriangleNormals() {
    return new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ]);
}

function getPlanePositions(scale) {
    return new Float32Array([
        -0.5, -0.5,
        0.5, -0.5,
        0.5, 0.5,

        0.5, 0.5,
        -0.5, 0.5,
        -0.5, -0.5
    ])
        .map(item => item * scale);
}

function getPlaneNormals() {
    return new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ]);
}
