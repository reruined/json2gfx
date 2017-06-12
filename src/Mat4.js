import Type from './Type.js';
import Vec3 from './Vec3.js';
import Vec4 from './Vec4.js';

const ROWS = 4;
const ROW_LENGTH = 4;
const COLUMNS = 4;
const ELEMENTS = ROWS * COLUMNS;

export default {
    identity,
    fromEulerAngles,
    fromMat3,
    multiply,
    translation,
    lookAt,
    setTranslation,
    orthographic,
}

function setTranslation(m, v) {
    m[12] = v[0];
    m[13] = v[1];
    m[14] = v[2];

    return m;
}

function fromMat3(m) {
    return new Float32Array([
        m[0], m[1], m[2], 0,
        m[3], m[4], m[5], 0,
        m[6], m[7], m[8], 0,
        0,       0,    0, 1,
    ]);
}

function lookAt(eye, target, up) {
    const forward = Vec3.normalize(Vec3.sub(eye, target));
    const right = Vec3.cross(up, forward);
    up = Vec3.cross(forward, right);

    return new Float32Array([
        ...right, 0,
        ...up, 0,
        ...forward, 0,
        ...eye, 1
    ]);
}

function identity() {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
}

function translation(v) {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        v[0], v[1], v[2], 1
    ]);
}

function fromEulerAngles(angles) {
    console.assert(Type.isArray(angles));

    const heading = rotationY(angles[1]);
    const pitch = rotationX(angles[0]);
    const bank = rotationZ(angles[2]);

    return multiply(bank, pitch, heading);
}

function rotationX(angle) {
    const yy = Math.cos(angle);
    const yz = Math.sin(angle);

    const zy = -Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        1, 0, 0, 0,
        0, yy, yz, 0,
        0, zy, zz, 0,
        0, 0, 0, 1,
    ]);
}

function rotationY(angle) {
    const xx = Math.cos(angle);
    const xz = -Math.sin(angle);

    const zx = Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        xx, 0, xz, 0,
        0, 1, 0, 0,
        zx, 0, zz, 0,
        0, 0, 0, 1
    ]);
}

function rotationZ(angle) {
    const xx = Math.cos(angle);
    const xy = Math.sin(angle);

    const yx = -Math.sin(angle);
    const yy = Math.cos(angle);

    return new Float32Array([
        xx, xy, 0, 0,
        yx, yy, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
}

function multiply(m1, m2, ...matrices) {
    if(!m2) {
        return m1;
    }

    let result = new Float32Array(ELEMENTS);
    for(let row = 0; row < ROWS; row++) {
        for(let col = 0; col < COLUMNS; col++) {
            const m1row = getRow(m1, row);
            const m2col = getColumn(m2, col);
            result[row * ROW_LENGTH + col] = Vec4.dot(m1row, m2col);
        }
    }

    return multiply(result, ...matrices);
}

function getRow(m, row) {
    return Vec4.fromValues(
        m[row * ROW_LENGTH + 0],
        m[row * ROW_LENGTH + 1],
        m[row * ROW_LENGTH + 2],
        m[row * ROW_LENGTH + 3],
    );
}

function getColumn(m, col) {
    return Vec4.fromValues(
        m[0 * ROW_LENGTH + col],
        m[1 * ROW_LENGTH + col],
        m[2 * ROW_LENGTH + col],
        m[3 * ROW_LENGTH + col],
    );
}

function orthographic(left, right, bottom, top, near, far) {
    console.assert(Type.isNumber(left));
    console.assert(Type.isNumber(right));
    console.assert(Type.isNumber(bottom));
    console.assert(Type.isNumber(top));
    console.assert(Type.isNumber(near));
    console.assert(Type.isNumber(far));

    const width = right - left;
    const height = top - bottom;
    const depth = far - near;

    return new Float32Array([
        2 / width, 0, 0, 0,
        0, 2 / height, 0, 0,
        0, 0, -2 / depth, 0,
        -((right + left) / width), -((top + bottom) / height), -((far + near) / depth), 1,
    ]);

    return identity();
}
