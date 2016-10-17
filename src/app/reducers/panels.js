import {ACTION_PANEL, SIDE_PANEL} from "app/actions/panels.js";

const initialState = [];
export default function panels(state = initialState, action) {
    switch (action.type) {
        case ACTION_PANEL:
            return [...state, action];

        case SIDE_PANEL:
            return [...state, action];

        default:
            return state;
    }
}