import _ from "lodash";


// TODO this should probably be a class having a method for every lookup type
export function buildQuery(model, params) {
    let query = model; // alias ..
    if (query.__relations) {
        query.__relations.map(relation => {
            query = query.populate(relation.name, relation.model);
        })
    }

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

function _transform(result, relations) {
    let item = result.toJSON();
    relations.forEach(relation => {
        let {name} = relation;
        if (item[name]) {
            item[name] = item[name].map(r => r.toJSON());
        }
    });
    return item;
}

export function loadRelations(model, results) {
    if (model.__relations) {
        if (_.isArray(results)) {
            return results.map(result => {
                return _transform(result, model.__relations);
            })
        } else {
            return _transform(results, model.__relations);
        }
    } else {
        return results.toJSON();
    }
}

export async function findOne(params, inputTypeDefs, projection) {
    let query = buildQuery(this, params);
    let result = await query.findOne();
    return loadRelations(this, result);
}

export async function findAll(params, inputTypeDefs, projection) {
    let query = buildQuery(this, params);
    let result = await query.find({}, projection);
    return loadRelations(this, result);
}

export async function create(params, inputTypeDefs, projection, objectProtoTypeGenerator: Function) {
    let inputName = inputTypeDefs[0].name;
    let objectProtoType = objectProtoTypeGenerator();

    // merge prototype with the actual input.
    let input = {...objectProtoType, ...params[inputName]};

    let instance = new this(input);
    let results = await instance.save();
    results = loadRelations(this, results);
    return results;
}
