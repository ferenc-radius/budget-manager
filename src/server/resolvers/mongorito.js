
// TODO this should probably be a class having a method for every lookup type
export function buildQuery(query, params) {
    if ("order" in params) { // TODO get order from inputTypeDefs
        query = query.sort(params.order.name, params.order.direction  == "ASC" ? 1 : -1);
        delete params.order;
    }

    for (let [key, value] of Object.entries(params)) {
        if (key.endsWith("__icontains")) {
            [key] = key.split("__");
            value = new RegExp(value, "i")
        }

        // TODO allow more filters (contains, startswith, istartswith, endswith, iendswith, range, isnull,gt, gte, lt, lte, ex

        query = query.where(key, value)
    }

    return query;

}

// these methods are just for convenience any special needs you should just feed you own function to the @resolver decorator
export function findOne(params, inputTypeDefs, projection) {
    let query = buildQuery(this, params);
    return query.findOne();
}

export async function findAll(params, inputTypeDefs, projection) {
    let query = buildQuery(this, params);
    return await query.find({}, projection);
}

export async function create(params, inputTypeDefs, projection) {
    console.assert(inputTypeDefsl.length == 1, "add method should have only one input type associated");
    let inputName = inputTypeDefs[0].name;
    let instance = new this(params[inputName]);
    return await instance.save();
}
