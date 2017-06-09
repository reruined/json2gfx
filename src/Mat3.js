import Type from './Type.js';
import Vec3 from './Vec3.js';

const ROWS = 3;
const COLUMNS = 3;

const ROW_LENGTH = COLUMNS;
const ELEMENTS = ROWS * COLUMNS;

export default {
    identity,
    fromEulerAngles,
    multiply,
    getColumn
}

function identity() {
    return new Float32Array([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    ]);
}

function fromEulerAngles(angles) {
    //console.assert(Type.isArray(angles));

    const heading = rotationY(angles[1]);
    const pitch = rotationX(angles[0]);
    const bank = rotationZ(angles[2]);

    return multiply(bank, pitch, heading);
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
            result[row * ROW_LENGTH + col] = Vec3.dot(m1row, m2col);
        }
    }

    return multiply(result, ...matrices);
}

function rotationX(angle) {
    const yy = Math.cos(angle);
    const yz = Math.sin(angle);

    const zy = -Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        1, 0, 0,
        0, yy, yz,
        0, zy, zz,
    ]);
}

function rotationY(angle) {
    const xx = Math.cos(angle);
    const xz = -Math.sin(angle);

    const zx = Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        xx, 0, xz,
        0, 1, 0,
        zx, 0, zz,
    ]);
}

function rotationZ(angle) {
    const xx = Math.cos(angle);
    const xy = Math.sin(angle);

    const yx = -Math.sin(angle);
    const yy = Math.cos(angle);

    return new Float32Array([
        xx, xy, 0,
        yx, yy, 0,
        0, 0, 1,
    ]);
}

function getRow(m, row) {
    return Vec3.fromValues(
        m[row * ROW_LENGTH + 0],
        m[row * ROW_LENGTH + 1],
        m[row * ROW_LENGTH + 2],
    );
}

function getColumn(m, col) {
    return Vec3.fromValues(
        m[0 * ROW_LENGTH + col],
        m[1 * ROW_LENGTH + col],
        m[2 * ROW_LENGTH + col],
    );
}