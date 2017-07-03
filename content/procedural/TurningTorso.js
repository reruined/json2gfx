import ArrayUtils from '../../src/ArrayUtils.js';

export default function (params) {
    const {
        height = 1,
        bottomScale = [1, 1, 1],
        topScale = [0.5, 0.5, 0.5],
        twist = 15,
        segments = 4
    } = params;

    const parts = ArrayUtils.range(segments)
        .map(index => {
            const rotY = twist * index;
            console.log(rotY);
        });

    return {
        shapes: [{
            shape: 'cube'
        }]
    };
}
