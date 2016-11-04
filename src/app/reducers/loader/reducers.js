import {ENABLE_LOADER, DISABLE_LOADER} from "./actionTypes";

const initialState = {
    enabled: false
};
export default function loaders(state = initialState, action) {
    switch (action.type) {
        case ENABLE_LOADER:
            return {enabled: true};

        case DISABLE_LOADER:
            return {enabled: false};

        default:
            return state;
    }
}