export const ENABLE_LOADER = "ENABLE_LOADER";
export const DISABLE_LOADER = "DISABLE_LOADER";

export function enableLoader() {
    return {
        type: ENABLE_LOADER
    }
}

export function disableLoader() {
    return {
        type: DISABLE_LOADER
    }
}