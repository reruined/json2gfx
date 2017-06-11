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
                data: getTrianglePositions('size' in geometry ? geometry.size : 1)
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
                data: getPlanePositions('size' in geometry ? geometry.size : 1)
            },
            normals: {
                itemSize: 3,
                data: getPlaneNormals()
            }
        };
    }

    if(geometry.shape === 'cube') {
        return {
            positions: {
                itemSize: 3,
                data: getCubePositions('size' in geometry ? geometry.size : 1),
            },
            normals: {
                itemSize: 3,
                data: getCubeNormals()
            }
        };
    }

    throw new Error(`Invalid shape '${geometry.shape}' in geometry`);
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

function getCubePositions(scale) {
    return new Float32Array([
        // +z 1
        -0.5, -0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,

        // +z 2
        0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5,
        -0.5, -0.5, 0.5,

        // -x 1
        -0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,

        // -x 2
        -0.5, 0.5, 0.5,
        -0.5, 0.5, -0.5,
        -0.5, -0.5, -0.5,

        // +y 1
        -0.5, 0.5, 0.5,
        0.5, 0.5, 0.5,
        0.5, 0.5, -0.5,

        // +y 2
        0.5, 0.5, -0.5,
        -0.5, 0.5, -0.5,
        -0.5, 0.5, 0.5,

        // +x 1
        0.5, -0.5, 0.5,
        0.5, -0.5, -0.5,
        0.5, 0.5, -0.5,

        // +x 2
        0.5, 0.5, -0.5,
        0.5, 0.5, 0.5,
        0.5, -0.5, 0.5,

        // -z 1
        0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,

        // -z 2
        -0.5, 0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, -0.5, -0.5,

        // -y 1
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5, 0.5,

        // -y 2
        0.5, -0.5, 0.5,
        -0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5,
    ])
        .map(item => item * scale);
}

function getCubeNormals() {
    return new Float32Array([
        // +z 1
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // +z 2
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // -x 1
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // -x 2
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // +y 1
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,

        // +y 2
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,

        // +x 1
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // +x 2
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // -z 1
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // -z 2
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // -y 1
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // -y 2
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
    ]);
}


