import { ACTION_PANEL, SIDE_PANEL } from "./actionTypes";

export function setActionPanel(name) {
    return {
        type: ACTION_PANEL,
        name
    }
}

export function setSidePanel(name) {
    return {
        type: SIDE_PANEL,
        name
    }
}
