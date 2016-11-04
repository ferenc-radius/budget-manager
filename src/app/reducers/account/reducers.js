import {ACCOUNTS_LOADED, ACCOUNT_SELECTED, ACCOUNT_EDIT} from "./actionTypes";

const initialState = {list: [], selectedAccount: null};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADED:
            // TODO normalize list to {"<id>"" {}}
            return {...state, list: action.result.data.accounts};

        case ACCOUNT_SELECTED:
            return {...state, selectedAccount: action.id};

        case ACCOUNT_EDIT:
            return {...state, edit: action.id};
        default:
            return state;
    }
}