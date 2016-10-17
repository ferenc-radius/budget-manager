export const ACTION_PANEL = "ACTION_PANEL";
export const SIDE_PANEL = "SIDE_PANEL";

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
