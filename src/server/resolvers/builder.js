import {parse} from "graphql";
import { buildASTSchema, astFromValue } from "graphql";
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} from "graphql/type";

import {getProjectionFromAST} from "./projection";
import _ from "lodash";

class ResolverAdapter {  /** interface **/
    async invoke(model, methodName, root, params, ctx, options) {}
}

export class MongoritoAdapter extends ResolverAdapter {
    async invoke(model, methodName, root, params, ctx, options) {
        const projectionNested = getProjectionFromAST(options);
        let res = await model[methodName].call(model, projectionNested);

        if (res) {
            if (!_.isArray(res)) {
                return res.attributes;
            } else {
                return res.map(r => r.attributes);
            }
        }

        return null;
    }
}


export function createResolverAdapter(backend) {
    // TODO this wont allows the user to define a new adapter...

    switch (backend) {
        case "mongorito":
            return new MongoritoAdapter();

        default:
            throw Error("backend: %s not supported", backend);
    }
}

class ResolverBuilder {
    constructor(queryTypeFields, model, resolverAdapter) {
        this.typeFields = queryTypeFields;
        this.model = model;
        this.resolverAdapter = resolverAdapter;
    }

    getModelName() {
        return this.model.name; // TODO is this ok?
    }

    getMethodNames(modelName) {
        return Object.entries(this.typeFields).map(([methodName, typeDef]) => {
            let typeName = null;

            // find the typename of the query
            if (typeDef.type instanceof GraphQLList) {
                typeName = typeDef.type.ofType.name
            } else if(typeDef.type instanceof GraphQLObjectType) {
                typeName = typeDef.type.name
            }

            if (typeName) {
                if (typeName == modelName) {
                    if (methodName in this.model) {
                        return methodName;
                    } else {
                        console.warn("method %s not found on model: %s", methodName, modelName);
                    }
                }
            }

        }).filter(m => m !== undefined);
    }
}

class QueryResolverBuilder extends ResolverBuilder {

    build() {
        let modelName = this.getModelName();
        let resolvers = {};
        let methodNames = this.getMethodNames(modelName);

        // TODO resolvers should accept order_by, filter arguments
        methodNames.forEach(methodName => {
            resolvers[methodName] = this.resolverAdapter.invoke.bind(this.resolverAdapter, this.model, methodName)
        });

        return resolvers;
    }
}

class MutationResolverBuilder extends ResolverBuilder{

    build() {
        let modelName = this.getModelName();
        let resolvers = {};
        let methodNames = this.getMethodNames(modelName);

        // TODO mutation arguments should expect inputData?
        methodNames.forEach(methodName => {
            resolvers[methodName] = this.resolverAdapter.invoke.bind(this.resolverAdapter, this.model, methodName)
        });

        return resolvers;
    }
}

/**
 *
 * @param source can be a typeDef string or a GraphQLSchema
 * @param models array with mongorito models
 * @param backend backend where to get the data (defaults to mongorito)
 * @param [rootQueryName] Name of the Query type
 * @param [rootMutationName] name of the MutationType
 * @returns {{}}
 */
export default function buildResolvers(source, models, backend="mongorito", rootQueryName="Query", rootMutationName="Mutation") {
    let resolvers = {
        [rootQueryName]: {},
        [rootMutationName]: {}
    };

    let schema = source;
    if (!(source instanceof GraphQLSchema)) {
        let astDocument = parse(source);
        schema = buildASTSchema(astDocument);
    }
    const queryTypeFields = schema.getQueryType().getFields();
    const mutationTypeFields = schema.getMutationType().getFields();
    const resolverAdapter = createResolverAdapter(backend);

    for (let model of models) {
        let queryResolvers = new QueryResolverBuilder(queryTypeFields, model, resolverAdapter).build();
        resolvers[rootQueryName] = {...resolvers[rootQueryName], ...queryResolvers};

        let mutationResolvers = new MutationResolverBuilder(mutationTypeFields, model, resolverAdapter).build();
        resolvers[rootMutationName] = {...resolvers[rootMutationName], ...mutationResolvers};
    }

    console.log("resolvers", resolvers);

    return resolvers
}


