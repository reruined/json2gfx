import ArrayUtils from '../../src/ArrayUtils.js';
import MathUtils from '../../src/MathUtils.js';
import Mesh from '../../src/Mesh.js';
import Vec3 from '../../src/Vec3.js';
import Mat3 from '../../src/Mat3.js';
import Cube from './Cube.js';

export default function (params) {
    const {
        origin = Vec3.zero(),
        position = Vec3.zero(),
        orientation = Vec3.zero(),
        scale = Vec3.one(),

        segments = 20,
        twist = 5,
        shrink = 0.04,
        height = 5
    } = params;

    const meshes = [];
    ArrayUtils.range(segments).forEach(i => {
        const totalSize = meshes.length > 0 ?
            Mesh.getExtents(Mesh.merge(...meshes)) :
            Vec3.zero();

        meshes.push(Cube({
            origin: [0, -1, 0],
            position: [0, totalSize[1], 0],
            orientation: [0, twist * i, 0],
            scale: [1 / (shrink * i + 1), height / segments, 1 / (shrink * i + 1)]
        }));

    });


    let mesh = Mesh.merge(...meshes);
    mesh.positions = mesh.positions.map(pos => {
        return Vec3.transform(pos, Mat3.fromEulerAngles([0, MathUtils.degToRad(twist * pos[1]), 0]));
    });
    mesh.normals = mesh.normals.map((normal, i) => {
        return Vec3.transform(normal, Mat3.fromEulerAngles([0, MathUtils.degToRad(twist * mesh.positions[i][1]), 0]));
    });

    mesh = Mesh.merge(mesh, Cube({
        origin: [0, -1, 0],
        position: [0, Mesh.getExtents(Mesh.merge(...meshes))[1], 0],
        scale: [2.5, 2.5, 2.5]
    }));

    Mesh.applyScale(mesh, scale);
    Mesh.applyRotation(mesh, Mat3.fromEulerAngles(orientation.map(MathUtils.degToRad)));
    Mesh.applyTranslation(mesh, position);
    Mesh.applyOrigin(mesh, origin);

    return mesh;
};
