// models
import Account from "../models/account";
import Balance from "../models/balance";
import Budget from "../models/budget";
import Category from "../models/category";
import Transaction from "../models/transaction";

import {getSchema} from '@risingstack/graffiti-mongoose';

const options = {
    mutation: true, // mutation fields can be disabled
    allowMongoIDMutation: false // mutation of mongo _id can be enabled
};

// expose models
let schema = getSchema([
    Account,
    Balance,
    Budget,
    Category,
    Transaction
], options);
export default schema;
