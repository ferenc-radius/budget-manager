import mongorito from "mongorito";
import {resolver} from "../resolvers/decorators";
import {findOne} from "../resolvers/mongorito";


@resolver("transaction", findOne)
export default class Transaction extends mongorito.Model {
    collection = "transactions"
}
