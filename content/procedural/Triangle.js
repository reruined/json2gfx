import ArrayUtils from '../../src/ArrayUtils.js';
import Vec3 from '../../src/Vec3.js';

const POSITIONS = Object.freeze([
    [0, 0.5, 0],
    [-0.5, -0.5, 0],
    [0.5, -0.5, 0],
]);

const NORMALS = Object.freeze([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]);

export default function (params) {
    const {
        scale = Vec3.one(),
        origin = Vec3.zero()
    } = params;

    const extents = Vec3.multiply(calculateExtents(POSITIONS), scale);
    const unnormalizedOrigin = Vec3.multiply(origin, extents);
    const positions = POSITIONS
        .map(v => Vec3.multiply(v, scale))
        .map(v => Vec3.scaleAndAdd(v, unnormalizedOrigin, -0.5));
    const normals = NORMALS;

    const vertices = ArrayUtils.range(positions.length)
        .reduce((vertices, index) => {
            vertices.push({
                position: positions[index],
                normal: normals[index]
            });

            return vertices;
        }, []);

    return {
        vertices,
        mode: 'TRIANGLES'
    };
}

function calculateExtents(points) {
    const min = points.reduce((result, point) => Vec3.min(result, point), Vec3.largest());
    const max = points.reduce((result, point) => Vec3.max(result, point), Vec3.smallest());
    return Vec3.sub(max, min);
}
