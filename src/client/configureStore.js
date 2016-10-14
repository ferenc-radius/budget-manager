import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {browserHistory} from "react-router";
import {routerMiddleware, push} from "react-router-redux";
import createLogger from "redux-logger";

// reducers
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// reducers from modules
import transactions from 'app/modules/transactions/reducers/transaction';

// actions
import * as transactionActions from "app/modules/transactions/actions/transactions";
import apolloActions from 'apollo-client/actions';

export default function configureStore(apolloClient, initialState) {
    let store;
    const reduxRouterMiddleWare = routerMiddleware(browserHistory);
    const middlewares = [
        reduxRouterMiddleWare,
        thunkMiddleware, // TODO thunk.withExtraArgument(apolloClient) ??
        apolloClient.middleware()
    ];

    const rootReducer = combineReducers({
        apollo: apolloClient.reducer(),
        transactions,
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
            ...transactionActions,
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
