import mongorito from "mongorito";

export default class Transaction extends mongorito.Model {
    collection = "transactions"
}
