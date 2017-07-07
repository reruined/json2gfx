import MathUtils from '../../src/MathUtils.js';
import Vec3 from '../../src/Vec3.js';
import Mat3 from '../../src/Mat3.js';
import Mesh from '../../src/Mesh.js';
import Grid from './Grid.js';

const POSITIONS = Object.freeze([
    [-1, -1, 0],
    [1, -1, 0],
    [1, 1, 0],

    [1, 1, 0],
    [-1, 1, 0],
    [-1, -1, 0],
]);

const NORMALS = Object.freeze([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],

    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]);

export default function (params) {
    const {
        scale = Vec3.one(),
        origin = Vec3.zero(),
        orientation = Vec3.zero(),
        position = Vec3.zero(),
    } = params || {};

    const mesh = Grid();

    Mesh.applyScale(mesh, scale);
    Mesh.applyRotation(mesh, Mat3.fromEulerAngles(orientation.map(MathUtils.degToRad)));
    Mesh.applyTranslation(mesh, position);
    Mesh.applyOrigin(mesh, origin);

    mesh.positions = mesh.positions.map(position => {
        position = Vec3.clone(position);
        position[1] *= Math.sin(((MathUtils.clamp(position[0], -1.0, 1.0) + 1.0) / 2.0) * Math.PI);
        position[1] *= Math.sin(((MathUtils.clamp(position[2], -1.0, 1.0) + 1.0) / 2.0) * Math.PI);
        position[1] = 1.0 - position[1] * 1.9;

        return position;
    });

    Mesh.calculateNormals(mesh);

    return mesh;
}
