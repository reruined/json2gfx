import Type from './Type.js';
import Vec3 from './Vec3.js';

const ROWS = 3;
const COLUMNS = 3;

const ROW_LENGTH = COLUMNS;
const ELEMENTS = ROWS * COLUMNS;

export default {
    parse,
    identity,
    fromEulerAngles,
    multiply,
    getColumn,
    getColumnFast,
    rotationX,
    rotationY,
    rotationZ,
    scale,
};

function parse(value) {
    if(Type.isArray(value) && value.length === 3) {
        return fromEulerAngles(...value);
    }
    throw new TypeError(`Failed to parse value of type '${Type.getName(value)}' into a Mat3`);
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

let _multiply_m2col = null;
let _multiply_m1row = null;
function multiply(m1, m2, ...matrices) {
    if(_multiply_m2col === null) {
        _multiply_m2col = Vec3.zero();
        _multiply_m1row = Vec3.zero();
    }

    if(!m2) {
        return m1;
    }

    _multiply_m2col[0] = 0;
    _multiply_m2col[1] = 0;
    _multiply_m2col[2] = 0;

    _multiply_m1row[0] = 0;
    _multiply_m1row[1] = 0;
    _multiply_m1row[2] = 0;
    const m1row = _multiply_m1row;
    const m2col = _multiply_m2col;
    let result = new Float32Array(ELEMENTS);
    for(let row = 0; row < ROWS; row++) {
        for(let col = 0; col < COLUMNS; col++) {
            getRowFast(m1row, m1, row);
            getColumnFast(m2col, m2, col);
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
    return new Float32Array(
        m.buffer,
        row * ROW_LENGTH * m.BYTES_PER_ELEMENT,
        ROW_LENGTH
    );
}

function getRowFast(out, m, row) {
    out[0] = m[row * ROW_LENGTH + 0];
    out[1] = m[row * ROW_LENGTH + 1];
    out[2] = m[row * ROW_LENGTH + 2];
}

function getColumn(m, col) {
    return Vec3.fromValues(
        m[0 * ROW_LENGTH + col],
        m[1 * ROW_LENGTH + col],
        m[2 * ROW_LENGTH + col]
    );
}

function getColumnFast(out, m, col) {
    out[0] = m[0 * ROW_LENGTH + col];
    out[1] = m[1 * ROW_LENGTH + col];
    out[2] = m[2 * ROW_LENGTH + col];
}

function scale(v) {
    return new Float32Array([
        v[0], 0, 0,
        0, v[1], 0,
        0, 0, v[2],
    ]);
}
