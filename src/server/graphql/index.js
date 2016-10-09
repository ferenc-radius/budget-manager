// models
import Account from "../models/account";
import Transaction from "../models/transaction";

import {getSchema} from '@risingstack/graffiti-mongoose';

const options = {
    mutation: true, // mutation fields can be disabled
    allowMongoIDMutation: false // mutation of mongo _id can be enabled
};
let schema = getSchema([Transaction, Account], options);
export default schema;
