import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {browserHistory} from "react-router";
import {routerMiddleware, push} from "react-router-redux";
import createLogger from "redux-logger";
import rootReducer from "app/reducers";

import * as TransactionActions from "../app/actions/transactions";

export default function configureStore(initialState) {
    let store;
    const reduxRouterMiddleWare = routerMiddleware(browserHistory);
    const middlewares = [
        reduxRouterMiddleWare,
        thunkMiddleware
    ];

    if (process.env.NODE_ENV === 'production') {
        store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))
    } else {
        const logger = createLogger({
            level: 'debug',
            collapsed: true
        });
        middlewares.push(logger);

        const actionCreators = {
            ...TransactionActions,
            push,
        };

        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension({ actionCreators }) : noop => noop

        ));
        if (window.devToolsExtension) {
            window.devToolsExtension.updateStore(store);
        }
    }

    return store;
}
