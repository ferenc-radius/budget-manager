import ResolverAdapter from "./index";
import {getProjectionFromAST} from "../projection";
import {
    GraphQLList,
    GraphQLNonNull
} from "graphql/type";


export function typeDefToObjectPrototypeBuilder(typeDef) {
    let fields = typeDef.type.getFields();
    let prototype = {};
    for (let [key, value] of Object.entries(fields)) {

        let type =  (value instanceof GraphQLNonNull) ? value.typeOf : value.type;
        if (type instanceof GraphQLList) {
            prototype[key] = [];
        } else {
            // its fine to put them to null, the graphql server will return an error for non-nullable fields
            prototype[key] = null;
        }
    }

    return prototype;
}

export default class MongoritoAdapter extends ResolverAdapter {
    getObjectProtoType(typeDef) {
        return typeDefToObjectPrototypeBuilder(typeDef);
    }

    async invoke(model, methodName, inputs, typeDefs, root, params, ctx, options) {
        const typeDef = typeDefs[methodName];
        const projectionNested = getProjectionFromAST(options);
        return await model[methodName].call(model, params, inputs, projectionNested, this.getObjectProtoType.bind(this, typeDef));
    }
}