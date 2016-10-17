import {TRANSACTIONS_LOADED} from "app/actions/transactions";

const initialState = {list: []};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_LOADED:
            return {...state, list: action.result.data.transactions};

        default:
            return state;
    }
}