import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {browserHistory} from "react-router";
import {routerMiddleware, push} from "react-router-redux";
import createLogger from "redux-logger";
import rootReducer from "../reducers";

//
import * as TransactionActions from "../actions/transactions";

const actionCreators = {
  ...TransactionActions,
  push,
};

const logger = createLogger({
    level: 'debug',
    collapsed: true
});

const router = routerMiddleware(browserHistory);

const enhancer = compose(
    applyMiddleware(thunk, router, logger),
    window.devToolsExtension ? window.devToolsExtension({ actionCreators }) : noop => noop
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (window.devToolsExtension) {
        window.devToolsExtension.updateStore(store);
    }

    return store;
}
