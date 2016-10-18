import {TRANSACTIONS_LOADED} from "app/actions/transactions";

const initialState = {list: []};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_LOADED:
            const serverData = action.result.data;
            const transactions = serverData.account.transactions.edges.map(edge => edge.node);

            return {...state, list: transactions};

        default:
            return state;
    }
}