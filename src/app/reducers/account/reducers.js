import {ACCOUNTS_LOADED, ACCOUNT_SELECTED} from "./actionTypes";

const initialState = {result: {accounts: []}, entities: {accounts: {}}, selectedAccount: null};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADED:
            return {...state, ...action.results};

        case ACCOUNT_SELECTED:
            return {...state, selectedAccount: action.id};

        default:
            return state;
    }
}