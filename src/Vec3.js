import Mat3 from './Mat3.js';

export default {
    fromValues,
    add,
    sub,
    normalize,
    dot,
    cross,
    zero,
    transform,
};

function cross(v1, v2) {
    return new Float32Array([
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ]);
}

function add(v1, v2) {
    return fromValues(
        v1[0] + v2[0],
        v1[1] + v2[1],
        v1[2] + v2[2]
    );
}

function sub(v1, v2) {
    return new Float32Array([
        v1[0] - v2[0],
        v1[1] - v2[1],
        v1[2] - v2[2]
    ]);
}

function normalize(v) {
    return scale(v, 1 / length(v));
}

function scale(v, scalar) {
    return v.map(element => element * scalar);
}

function length(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function fromValues(x, y, z) {
    return new Float32Array([x, y, z]);
}

function zero() {
    return fromValues(0, 0, 0);
}

function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

function transform(v, m) {
    return fromValues(
        dot(v, Mat3.getColumn(m, 0)),
        dot(v, Mat3.getColumn(m, 1)),
        dot(v, Mat3.getColumn(m, 2)),
    );
}
