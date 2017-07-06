import ArrayUtils from '../../src/ArrayUtils.js';
import MathUtils from '../../src/MathUtils.js';
import Mesh from '../../src/Mesh.js';
import Vec3 from '../../src/Vec3.js';
import Mat3 from '../../src/Mat3.js';
import Triangle from './Triangle.js';
import Quad from './Quad.js';

export default function (params) {
    const {
        origin = Vec3.zero(),
        position = Vec3.zero(),
        orientation = Vec3.zero(),
        scale = Vec3.one(),
    } = params;

    let mesh = Mesh.merge(
        TwoSidedTriangle(),
        TwoSidedTriangle({ orientation: [0, 45, 0] }),
        TwoSidedTriangle({ orientation: [0, 90, 0] }),
        TwoSidedTriangle({ orientation: [0, 135, 0] })
    );

    Mesh.applyScale(mesh, scale);
    Mesh.applyRotation(mesh, Mat3.fromEulerAngles(orientation.map(MathUtils.degToRad)));
    Mesh.applyTranslation(mesh, position);
    Mesh.applyOrigin(mesh, origin);

    return mesh;
};

function TwoSidedTriangle(params = {}) {
    const {
        origin = Vec3.zero(),
        position = Vec3.zero(),
        orientation = Vec3.zero(),
        scale = Vec3.one(),
    } = params;

    const mesh = Mesh.merge(
        Triangle(),
        Triangle({ orientation: [0, 180, 0] })
    );

    Mesh.applyScale(mesh, scale);
    Mesh.applyRotation(mesh, Mat3.fromEulerAngles(orientation.map(MathUtils.degToRad)));
    Mesh.applyTranslation(mesh, position);
    Mesh.applyOrigin(mesh, origin);

    return mesh;
}
