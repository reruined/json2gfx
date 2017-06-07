export default {
    sub,
    normalize,
    cross
};

function cross(v1, v2) {
    return new Float32Array([
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ]);
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
