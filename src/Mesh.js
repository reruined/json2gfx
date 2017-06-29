import Type from './Type.js';
import Vec3 from './Vec3.js';
import Mat3 from './Mat3.js';

export default {
    fromGeometry
};

const POSITIONS = {
    triangle: new Float32Array([
        0.0, 0.5, 0,
        -0.5, -0.5, 0,
        0.5, -0.5, 0,
    ]),
    quad: new Float32Array([
        -0.5, -0.5, 0,
        0.5, -0.5, 0,
        0.5, 0.5, 0,

        0.5, 0.5, 0,
        -0.5, 0.5, 0,
        -0.5, -0.5, 0,
    ]),
    cube: new Float32Array([
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
    ]),
}

const NORMALS = {
    triangle: new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ]),
    quad: new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ]),
    cube: new Float32Array([
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
    ])
}

function fromGeometry(geometry) {
    console.assert(Type.isObject(geometry));
    console.assert(Type.isArray(geometry.shapes));

    const vertices = geometry.shapes.map(shape => {
        const orientation = 'orientation' in shape ? shape.orientation : Vec3.zero();
        const scale = 'scale' in shape ? shape.scale : [1, 1, 1];
        const position = 'position' in shape ? shape.position: Vec3.zero();

        const rotation = Mat3.multiply(Mat3.fromEulerAngles(orientation), Mat3.scale(scale));
        const vertices = getVertices(shape.shape)
            .map(v => transformVertex(v, rotation, position));

        return vertices;
    });

    return { vertices: Array().concat(...vertices), mode: 'TRIANGLES' };
}

function getVertices(shape) {
    console.assert(shape in POSITIONS);
    console.assert(shape in NORMALS);
    const positions = POSITIONS[shape];
    const normals = NORMALS[shape];

    return Array(positions.length / 3).fill(null)
        .map((_, index) => {
            return {
                position: positions.slice(index * 3, index * 3 + 3),
                normal: normals.slice(index * 3, index * 3 + 3)
            };
        });
}

function transformVertex(vertex, rotation, translation) {
    const newVertex = {};
    if('position' in vertex) {
        newVertex.position = Vec3.add(Vec3.transform(vertex.position, rotation), translation);
    }
    if('normal' in vertex) {
        newVertex.normal = Vec3.transform(vertex.normal, rotation);
    }
    return newVertex;
}


function getTriangleUvs() {
    return new Float32Array([
        0.5, 1,
        0, 0,
        1, 0
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
