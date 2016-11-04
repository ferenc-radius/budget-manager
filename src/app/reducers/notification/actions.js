import {SHOW_NOTIFICATIONS, HIDE_NOTIFICATIONS} from "./actionTypes";

export function showNotification(message, options={}) {
    return {
        type: SHOW_NOTIFICATIONS,
        payload: {
            message,
            options
        }
    }
}

export function hideNotification() {
    return {
        type: HIDE_NOTIFICATIONS
    }
}