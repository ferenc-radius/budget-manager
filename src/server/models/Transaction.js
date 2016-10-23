import mongorito from "mongorito";
import {resolver} from "../resolvers/decorators";
import {findOne, findAll} from "../resolvers/mongorito";


@resolver("transaction", findOne)
@resolver("transactions", findAll)
export default class Transaction extends mongorito.Model {
    collection = "transactions"
}
