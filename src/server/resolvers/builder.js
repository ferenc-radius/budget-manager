import {parse} from "graphql";
import { buildASTSchema, astFromValue } from "graphql";
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType
} from "graphql/type";

import {memoize} from 'lodash';
import {decorate} from 'core-decorators';
import MongoritoAdapter from "./adapters/mongorito";


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
    constructor(querytypeDefs, model, resolverAdapter) {
        this.typeDefs = querytypeDefs;
        this.model = model;
        this.resolverAdapter = resolverAdapter;
    }

    getModelName() {
        return this.model.name; // TODO is this ok?
    }

    @decorate(memoize)
    getMethodNames(modelName) {
        return Object.entries(this.typeDefs).map(([methodName, typeDef]) => {
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

        }).filter(t => t !== undefined);
    }

    @decorate(memoize)
    getInputFields(methodName) {
        let typeField = this.typeDefs[methodName];
        let args = typeField.args || [];

        return args.map(arg => {
            let type = arg.type instanceof GraphQLNonNull ? arg.type.ofType : arg.type;
            if (type instanceof GraphQLInputObjectType) {
                return {name: arg.name, fields: type.getFields()};
            }
        }).filter(t => t !== undefined);
    }

    build() {
        let modelName = this.getModelName();
        let resolvers = {};
        let methodNames = this.getMethodNames(modelName);

        methodNames.forEach(methodName => {
            let inputs = this.getInputFields(methodName);
            resolvers[methodName] = this.resolverAdapter.invoke.bind(
                this.resolverAdapter, this.model, methodName, inputs, this.typeDefs
            )
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
    const queryTypeDefs = schema.getQueryType().getFields();
    const mutationTypeDefs = schema.getMutationType().getFields();
    const resolverAdapter = createResolverAdapter(backend);

    for (let model of models) {
        let queryResolvers = new ResolverBuilder(queryTypeDefs, model, resolverAdapter).build();
        resolvers[rootQueryName] = {...resolvers[rootQueryName], ...queryResolvers};

        let mutationResolvers = new ResolverBuilder(mutationTypeDefs, model, resolverAdapter).build();
        resolvers[rootMutationName] = {...resolvers[rootMutationName], ...mutationResolvers};
    }

    return resolvers
}


