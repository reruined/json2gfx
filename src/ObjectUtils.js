import Type from './Type.js';

export default {
    resolvePath,
    findAll,
};

function resolvePath(object, path) {
    console.assert(Type.isObject(object));
    console.assert(Type.isString(path));

    const keys = path
        .split('.');

    const value = keys.reduce(
        (object, key) => object[key],
        object
    );

    return value;
}

function findAll(object, predicate, visitedObjects = [], container = []) {
    console.assert(Type.isObject(object));
    console.assert(Type.isFunction(predicate));

    if(predicate(object)) {
        container.push(object);
    }
    visitedObjects.push(object);

    Object.keys(object)
        .filter(key => key.charAt(0) !== '_')
        .map(key => object[key])
        .filter(Type.isObject)
        .filter(item => !visitedObjects.includes(item))
        .forEach(item => findAll(item, predicate, visitedObjects, container));

    return container;
}
