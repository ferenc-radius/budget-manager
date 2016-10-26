
export function relation(name, model) {
    return function(target) {
        if (!target['__relations']) {
            target.__relations = [];
        }
        target.__relations.push({name: name, model: model});
    }
}

export function resolver(method, resolverFunction) {
    return function(target) {
        target[method] = resolverFunction;
    }
}