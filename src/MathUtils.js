export default {
    degToRad,
    clamp,
};

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
}
