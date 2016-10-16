import {SHOW_NOTIFICATIONS, HIDE_NOTIFICATIONS} from "app/actions/notification";
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
            let newState = Object.assign({show: true}, action);

            // force the initial options when the action options provides none
            _.mergeWith(action.options, initialState.options, (objValue, srcValue) => {
                return srcValue !== undefined ? srcValue : objValue;
            });

            return newState;

        case HIDE_NOTIFICATIONS:
            return Object.assign({show: false}, action);

        default:
            return state;
    }
}