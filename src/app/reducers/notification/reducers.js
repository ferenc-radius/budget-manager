import {SHOW_NOTIFICATIONS, HIDE_NOTIFICATIONS} from "./actionTypes";
import _ from 'lodash';

const initialState = {
    show: false,
    message: "",
    options: {
        action: "",
        icon: "done",
        timeout: 1500,
        type: "accept"
    }
};

export default function notifications(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOTIFICATIONS:
            let newState = {show: true, ...action.payload};

            // TODO this is not clean you should only save the minimal state, this can be calculated..
            // force the initial options when the action options provides none
            _.mergeWith(action.payload.options, initialState.options, (objValue, srcValue) => {
                return srcValue !== undefined ? srcValue : objValue;
            });

            return newState;

        case HIDE_NOTIFICATIONS:
            return {...initialState, show: false};

        default:
            return state;
    }
}