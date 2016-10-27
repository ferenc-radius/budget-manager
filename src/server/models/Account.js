import mongorito from "mongorito";
import {resolver, relation} from "../resolvers/decorators";
import {buildQuery, loadRelations, findOne, findAll, create} from "../resolvers/mongorito";

import Transaction from "./Transaction";

async function findWithTransactions(params, inputTypeDefs, projection) {
    let query = buildQuery(this, params).exists("transactions");
    let result = await query.find({}, projection);
    return loadRelations(this, result);
}

@resolver("account", findOne)
@resolver("accounts", findWithTransactions)
@resolver("addAccount", create)
@relation("transactions", Transaction)
export default class Account extends mongorito.Model {
    collection = "accounts";

    // TODO last balance
}
