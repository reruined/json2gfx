import MathUtils from '../../src/MathUtils.js';
import Mesh from '../../src/Mesh.js';
import Mat3 from '../../src/Mat3.js';
import Vec3 from '../../src/Vec3.js';
import Quad from './Quad.js';

export default function (params) {
    const {
        origin = Vec3.zero(),
        position = Vec3.zero(),
        orientation = Vec3.zero(),
        scale = Vec3.one()
    } = params;

    const mesh = Mesh.merge(
        Quad({
            position: [0, 0, 1],
            orientation: [0, 0, 0]
        }),
        Quad({
            position: [1, 0, 0],
            orientation: [0, 90, 0]
        }),
        Quad({
            position: [0, 0, -1],
            orientation: [0, 180, 0]
        }),
        Quad({
            position: [-1, 0, 0],
            orientation: [0, -90, 0]
        }),
        Quad({
            position: [0, 1, 0],
            orientation: [-90, 0, 0]
        }),
        Quad({
            position: [0, -1, 0],
            orientation: [90, 0, 0]
        })
    );

    Mesh.applyScale(mesh, scale);
    Mesh.applyRotation(mesh, Mat3.fromEulerAngles(orientation.map(MathUtils.degToRad)));
    Mesh.applyTranslation(mesh, position);
    Mesh.applyOrigin(mesh, origin);
    Mesh.calculateNormals(mesh);

    return mesh;
}
