import {ACCOUNTS_LOADED, ACCOUNT_SELECTED} from "app/actions/accounts";

const initialState = {list: [], selectedAccount: null};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADED:
            return {...state, list: action.result.data.accounts};

        case ACCOUNT_SELECTED:
            return {...state, selectedAccount: action.id};

        default:
            return state;
    }
}