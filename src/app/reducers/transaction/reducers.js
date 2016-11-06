import {TRANSACTIONS_LOADED} from "./actionTypes";

const initialState = {result: {transactions: []}, entities: {transactions: {}}};

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_LOADED:
            return {...state, ...action.results};

        default:
            return state;
    }
}