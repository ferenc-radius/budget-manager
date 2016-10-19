import mongorito from "mongorito";

export default class Account extends mongorito.Model {
    collection = "accounts"
}
