import { DELETE_TRANSACTION } from '../actions/transactions';

export default function deleteTransaction(state = [], action) {
    switch (action.type) {
        case DELETE_TRANSACTION:
            alert("delete");
            return state;

        default:
            return state;
    }
};

