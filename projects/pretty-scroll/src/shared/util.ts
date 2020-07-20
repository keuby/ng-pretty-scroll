export function isObject(obj: any): boolean {
    return obj !== null && typeof obj === 'object';
}

export function override(target: object, source: object) {
    if (!isObject(source)) {
        return target;
    }

    for (const prop of Object.keys(source)) {
        target[prop] = source[prop];
    }

    return target;
}

export function merge(o1: object, o2: object) {
    const merged: object = {};

    if (isObject(o1)) {
        override(merged, o1);
    }

    if (isObject(o2)) {
        override(merged, o2);
    }

    return merged;
}
