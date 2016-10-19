import QueryType from './types/Query.graphqls';
import MutationType from './types/Mutation.graphqls';
import SchemaType from './types/Schema.graphqls';

import enums from './types/enums.graphqls';
import AccountType from './types/Account.graphqls';
import BalanceType from './types/Balance.graphqls';
import CategoryType from './types/Category.graphqls';
import InvoiceType from './types/Invoice.graphqls';
import TransactionType from './types/Transaction.graphqls';

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from "./resolvers"

let typeDefs = [
    enums,
    AccountType,
    BalanceType,
    CategoryType,
    InvoiceType,
    TransactionType,
    QueryType,
    MutationType,
    SchemaType
].join("\n");



const executable = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default executable;