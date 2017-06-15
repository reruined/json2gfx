import Mat4 from './Mat4.js';

export default {
    fromObject
};

function fromObject(object) {
    let projection = Mat4.identity();
    if(object.projection.type === 'perspective') {
        projection = Mat4.perspective(
            object.projection.ar,
            object.projection.fov,
            object.projection.near,
            object.projection.far
        );
    }

    return {
        view: Mat4.inverse(object.transform),
        projection: projection
    };
}
