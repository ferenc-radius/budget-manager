export function resolver(method, resolverFunction) {
    return function(target) {
        target[method] = resolverFunction;
    }
}