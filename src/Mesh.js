import Vec3 from './Vec3.js';
import Mat3 from './Mat3.js';

export default {
    fromGeometry
};

function fromGeometry(geometry) {
    console.assert(geometry);

    let mesh = null;

    if(geometry.shape === 'triangle') {
        mesh = {
            positions: {
                itemSize: 3,
                data: getTrianglePositions('size' in geometry ? geometry.size : 1)
            },
            normals: {
                itemSize: 3,
                data: getTriangleNormals()
            },
            uvs: {
                itemSize: 2,
                data: getTriangleUvs()
            }
        };
    }

    if(geometry.shape.match('plane|quad')) {
        mesh = {
            positions: {
                itemSize: 3,
                data: getPlanePositions('size' in geometry ? geometry.size : 1)
            },
            normals: {
                itemSize: 3,
                data: getPlaneNormals()
            },
            uvs: {
                itemSize: 2,
                data: getPlaneUvs()
            }
        };
    }

    if(geometry.shape === 'cube') {
        mesh = {
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

    const position =
        'position' in geometry ?
        Vec3.parse(geometry.position) :
        Vec3.zero();

    const orientation =
        'orientation' in geometry ?
        Vec3.parse(geometry.orientation).map(degToRad) :
        Vec3.zero();

    const scale =
        'scale' in geometry ?
        Vec3.parse(geometry.scale) :
        Vec3.one();

    // rotate positions
    mesh.positions.data = mesh.positions.data
        .reduce((array, component) => {
            let lastVertex = array[array.length - 1];
            if(lastVertex.length === 3) {
                const newVertex = [];
                array.push(newVertex);
                lastVertex = newVertex;
            }

            lastVertex.push(component);
            return array;
        }, [[]])
        .map(v => {
            v = Vec3.transform(v, Mat3.fromEulerAngles(orientation));
            v = Vec3.transform(v, Mat3.scale(scale));
            v = Vec3.add(v, position);
            return v;
        })
        .reduce((array, vertex) => {
            return array.concat(Array.from(vertex));
        }, []);
    mesh.positions.data = new Float32Array(mesh.positions.data);

    // rotate normals
    if(mesh.normals) {
        mesh.normals.data = mesh.normals.data
            .reduce((array, component) => {
                let lastVertex = array[array.length - 1];
                if(lastVertex.length === 3) {
                    const newVertex = [];
                    array.push(newVertex);
                    lastVertex = newVertex;
                }

                lastVertex.push(component);
                return array;
            }, [[]])
            .map(v => {
                const n = Vec3.transform(v, Mat3.fromEulerAngles(orientation));
                console.assert(v.length === 3);
                return n;
            })
            .reduce((array, vertex) => {
                return array.concat(Array.from(vertex));
            }, []);
        mesh.normals.data = new Float32Array(mesh.normals.data);
    }

    if(!mesh) {
        throw new Error(`Invalid shape '${geometry.shape}' in geometry`);
    }

    return mesh;
}

function getTrianglePositions(scale) {
    return new Float32Array([
        0.0, 0.5, 0,
        -0.5, -0.5, 0,
        0.5, -0.5, 0,
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

function getTriangleUvs() {
    return new Float32Array([
        0.5, 1,
        0, 0,
        1, 0
    ]);
}

function getPlanePositions(scale) {
    return new Float32Array([
        -0.5, -0.5, 0,
        0.5, -0.5, 0,
        0.5, 0.5, 0,

        0.5, 0.5, 0,
        -0.5, 0.5, 0,
        -0.5, -0.5, 0,
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

function getPlaneUvs() {
    return new Float32Array([
        0, 0,
        1, 0,
        1, 1,

        1, 1,
        0, 1,
        0, 0,
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

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

