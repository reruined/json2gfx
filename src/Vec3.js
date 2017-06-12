import Type from './Type.js';
import Mat3 from './Mat3.js';

export default {
    parse,
    fromValues,
    add,
    sub,
    normalize,
    dot,
    cross,
    zero,
    transform,
};

function parse(value) {
    if(value instanceof Float32Array) {
        return value.slice();
    }

    if(Type.isArray(value)) {
        return fromValues(...value);
    }

    if(Type.isUndefined(value)) {
        return zero();
    }

    throw new TypeError(`Failed to parse value of type '${Type.getName(value)}' into a Vec3`);
}

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

function fromValues(x = 0, y = 0, z = 0) {
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
