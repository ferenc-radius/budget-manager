import QueryType from "./types/Query.graphqls";
import MutationType from "./types/Mutation.graphqls";
import SchemaType from "./types/Schema.graphqls";

// graphql types
import enums from "./types/enums.graphqls";
import AccountType from "./types/Account.graphqls";
import BalanceType from "./types/Balance.graphqls";
import CategoryType from "./types/Category.graphqls";
import InvoiceType from "./types/Invoice.graphqls";
import TransactionType from "./types/Transaction.graphqls";

// mongorito models
import Account from "./models/account";
import Transaction from "./models/transaction";

import {makeExecutableSchema} from "graphql-tools";
import buildResolvers from "./resolvers/builder";

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

let resolvers = buildResolvers(typeDefs, [
    Account,
    Transaction
]);

const executable = makeExecutableSchema({
    typeDefs,
    resolvers,
    // connectors TODO anything to add ?
});

export default executable;