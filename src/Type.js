export default {
    getName,
    isString,
    isArray,
    isFunction,
    isUndefined,
    isNull,
    isObject,
};

function getName(value) {
    if(isNull(value)) {
        return 'null';
    }

    if(isArray(value)) {
        return 'array';
    }

    return typeof value;
}

function isString(value) {
    return typeof value === 'string';
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === 'function';
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isNull(value) {
    return value === null;
}

function isObject(value) {
    return Object(value) === value;
}
