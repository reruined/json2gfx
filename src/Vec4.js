import Type from './Type.js';

export default {
    fromValues,
    dot,
    parse
};

function parse(value) {
    if(value instanceof Float32Array) {
        return value.slice();
    }

    if(Type.isArray(value)) {
        return fromValues(...value);
    }

    if(Type.isNumber(value)) {
        return fromValues(value, value, value, 1);
    }

    if(Type.isUndefined(value)) {
        return zero();
    }

    throw new TypeError(`Failed to parse value of type '${Type.getName(value)}' into a Vec4`);
}

function fromValues(x = 0, y = 0, z = 0, w = 1) {
    return new Float32Array([x, y, z, w]);
}

function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2] + v1[3] * v2[3];
}

function zero() {
    return fromValues(0, 0, 0, 0);
}
