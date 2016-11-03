import {TRANSACTIONS_LOADED} from "app/actions/transactions";

const initialState = {list: []};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_LOADED:
            const serverData = action.result.data;

            // TODO normalize list to {"<id>"" {}}
            const transactions = serverData.account.transactions;

            return {...state, list: transactions};

        default:
            return state;
    }
}