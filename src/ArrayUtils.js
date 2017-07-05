export default {
    range
};

function range(number) {
    return Array(number).fill(0).map((_, index) => index);
}
