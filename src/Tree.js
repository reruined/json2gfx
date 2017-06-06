'use strict';
import Type from './Type.js';

export default {
    fromObject,
    findByName,
    findValueReverse,
};

function fromObject(object, parent = null, root = object) {
    console.assert(Type.isObject(object));

    const children = (object.children || [])
        .map(child => fromObject(child, object, root));

    return Object.assign(
        {
            parent,
            root
        },
        object,
        {
            children
        }
    );
}

function findByName(node, name) {
    if(!Type.isString(name)) {
        throw new TypeError(`Invalid type '${Type.getName(name)}' for argument 'name'`);
    }

    if(node.name === name) {
        return node;
    }

    return (node.children || []).find(child => findByName(child, name));
}

function findValueReverse(node, callback) {
    console.assert(Type.isFunction(callback));

    if(!node) {
        return null;
    }

    const result = callback(node);
    if(!Type.isUndefined(result) && !Type.isNull(result)) {
        return result;
    }

    return findValueReverse(node.parent, callback);
}
