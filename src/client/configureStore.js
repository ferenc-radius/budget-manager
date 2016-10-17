import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {browserHistory} from "react-router";
import {routerMiddleware, push} from "react-router-redux";
import createLogger from "redux-logger";

// reducers
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// reducers from modules
import panels from '../app/reducers/panels';
import accounts from '../app/reducers/accounts';
import transactions from '../app/reducers/transactions';
import notification from '../app/reducers/notification';
import loader from '../app/reducers/loader';

// actions
import * as panelActions from "../app/actions/panels";
import * as accountActions from "../app/actions/accounts";
import * as transactionActions from "../app/actions/transactions";
import * as notificationsActions from "../app/actions/notification";
import * as loaderActions from "../app/actions/loader";
import apolloActions from 'apollo-client/actions';

export default function configureStore(apolloClient, initialState) {
    let store;
    const reduxRouterMiddleWare = routerMiddleware(browserHistory);
    const middlewares = [
        reduxRouterMiddleWare,
        thunkMiddleware.withExtraArgument(apolloClient),
        apolloClient.middleware()
    ];

    const rootReducer = combineReducers({
        apollo: apolloClient.reducer(),
        panels,
        accounts,
        transactions,
        notification,
        loader,
        routing
    });

    if (process.env.NODE_ENV === 'production') {
        store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))
    } else {
        const logger = createLogger({
            level: 'debug',
            collapsed: true
        });
        middlewares.push(logger);

        const actionCreators = {
            ...panelActions,
            ...accountActions,
            ...transactionActions,
            ...notificationsActions,
            ...loaderActions,
            apolloActions,
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
