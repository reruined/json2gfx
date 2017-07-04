import Type from './Type.js';
import Vec3 from './Vec3.js';
import Mat3 from './Mat3.js';

export default {
    fromGeometry,
    getExtents,
    applyOrigin,
    applyTranslation,
    applyRotation,
    applyScale,
    merge
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
};

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
};

function fromGeometry(geometry) {
    console.assert(Type.isObject(geometry));
    console.assert(Type.isArray(geometry.shapes));

    const vertexArrays = geometry.shapes.map(shape => {
        const orientation = 'orientation' in shape ? shape.orientation : Vec3.zero();
        const scale = 'scale' in shape ? shape.scale : [1, 1, 1];
        const position = 'position' in shape ? shape.position: Vec3.zero();

        //const rotation = Mat3.multiply(Mat3.scale(scale), Mat3.fromEulerAngles(orientation));
        const rotation = Mat3.fromEulerAngles(orientation);
        const scaleMatrix = Mat3.scale(scale);
        const vertices = getVertices(shape.shape)
            .map(v => transformVertex(v, position, rotation, scaleMatrix));

        return vertices;
    });

    const vertices = Array().concat(...vertexArrays);

    return {
        positions: vertices.map(v => v.position),
        normals: vertices.map(v => v.normal),
        mode: 'TRIANGLES',
    };
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

function transformVertex(vertex, translation, rotation, scale) {
    const newVertex = {};
    if('position' in vertex) {
        newVertex.position = Vec3.clone(vertex.position);
        newVertex.position = Vec3.transform(newVertex.position, scale);
        newVertex.position = Vec3.transform(newVertex.position, rotation);
        newVertex.position = Vec3.add(newVertex.position, translation);
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

function applyScale(mesh, scale) {
    const positions = mesh.positions
        .map(position => Vec3.multiply(position, scale));
    mesh.positions = positions;
}

function applyRotation(mesh, transform) {
    const positions = mesh.positions
        .map(position => Vec3.transform(position, transform));

    const normals = mesh.normals
        .map(normal => Vec3.transform(normal, transform));

    mesh.positions = positions;
    mesh.normals = normals;
}

function applyTranslation(mesh, translation) {
    console.assert(Type.isObject(mesh));

    const positions = mesh.positions
        .map(position => Vec3.add(position, translation));
    mesh.positions = positions;
}

function applyOrigin(mesh, normalizedOrigin) {
    console.assert(normalizedOrigin.length === 3);
    console.assert(-1 >= normalizedOrigin[0] <= 1);
    console.assert(-1 >= normalizedOrigin[1] <= 1);
    console.assert(-1 >= normalizedOrigin[2] <= 1);
    console.assert('positions' in mesh);

    const extents = getExtents(mesh);
    const unnormalizedOrigin = Vec3.multiply(normalizedOrigin, extents);
    const positions = mesh.positions.map(position => Vec3.scaleAndAdd(position, unnormalizedOrigin, -0.5));
    mesh.positions = positions;
}

function getExtents(mesh) {
    console.assert('positions' in mesh);
    const min = mesh.positions.reduce((result, pos) => Vec3.min(result, pos), Vec3.largest());
    const max = mesh.positions.reduce((result, pos) => Vec3.max(result, pos), Vec3.smallest());
    return Vec3.sub(max, min);
}

function merge(...meshes) {
    const positions = Array().concat(...meshes.map(mesh => mesh.positions));
    const normals = Array().concat(...meshes.map(mesh => mesh.normals));

    return {
        positions,
        normals,
        mode: meshes[0].mode
    };
}
