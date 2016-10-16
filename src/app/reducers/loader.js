import {ENABLE_LOADER, DISABLE_LOADER} from "app/actions/loader.js";

const initialState = {
    enabled: false
};
export default function notifications(state = initialState, action) {
    switch (action.type) {
        case ENABLE_LOADER:
            return Object.assign({enabled: true}, action);

        case DISABLE_LOADER:
            return Object.assign({enabled: false}, action);

        default:
            return state;
    }
}