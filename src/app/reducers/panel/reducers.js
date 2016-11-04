import {ACTION_PANEL, SIDE_PANEL} from "./actionTypes";

const initialState = {actionPanel: null, sidePanel: "accounts"}; // TODO use constants for panels
export default function panels(state = initialState, action) {

    switch (action.type) {
        case ACTION_PANEL:
            return {...state, actionPanel: action.name};

        case SIDE_PANEL:
            return {...state, sidePanel: action.name};

        default:
            return state;
    }
}