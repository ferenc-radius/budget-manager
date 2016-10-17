export const SHOW_NOTIFICATIONS = "SHOW_NOTIFICATIONS";
export const HIDE_NOTIFICATIONS = "HIDE_NOTIFICATIONS";

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