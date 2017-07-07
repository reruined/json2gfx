import MathUtils from '../../src/MathUtils.js';
import Vec3 from '../../src/Vec3.js';
import Mat3 from '../../src/Mat3.js';
import Mesh from '../../src/Mesh.js';
import Quad from './Quad.js';

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
        cells = 20
    } = params || {};

    const halfGridSize = 1.0;
    const halfCellSize = halfGridSize / cells;
    const cellSize = halfCellSize * 2.0;
    const startPos = [-halfGridSize + halfCellSize, -halfGridSize + halfCellSize, 0];

    const meshes = [];
    for(let x = 0; x < cells; x++) {
        for(let y = 0; y < cells; y++) {
            meshes.push(Quad({
                scale: [halfCellSize, halfCellSize, 1],
                position: Vec3.add(startPos, [cellSize * x, cellSize * y, 0])
            }));
        }
    }

    const mesh = Mesh.merge(...meshes);

    Mesh.applyScale(mesh, scale);
    Mesh.applyRotation(mesh, Mat3.fromEulerAngles(orientation.map(MathUtils.degToRad)));
    Mesh.applyTranslation(mesh, position);
    Mesh.applyOrigin(mesh, origin);

    return mesh;
}
