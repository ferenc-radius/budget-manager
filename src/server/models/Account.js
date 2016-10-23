import mongorito from "mongorito";
import {resolver} from "../resolvers/decorators";
import {findOne, findAll, create} from "../resolvers/mongorito";


@resolver("account", findOne)
@resolver("accounts", findAll)
@resolver("addAccount", create)
export default class Account extends mongorito.Model {
    collection = "accounts";

}
