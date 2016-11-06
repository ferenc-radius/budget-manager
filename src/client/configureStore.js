import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { browserHistory } from "react-router";
import createLogger from "redux-logger";

import {routerMiddleware, push} from "react-router-redux";
import { createResponsiveStoreEnhancer } from 'redux-responsive'

// reducers
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { responsiveStateReducer } from 'redux-responsive';

// reducers from modules
import panels from 'app/reducers/panel/reducers';
import accounts from 'app/reducers/account/reducers';
import transactions from 'app/reducers/transaction/reducers';
import notification from 'app/reducers/notification/reducers';
import loader from 'app/reducers/loader/reducers';

// actions
import * as panelActions from "app/reducers/panel/actions";
import * as accountActions from "app/reducers/account/actions";
import * as transactionActions from "app/reducers/transaction/actions";
import * as notificationsActions from "app/reducers/notification/actions";
import * as loaderActions from "app/reducers/loader/actions";
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
        form: formReducer,
        browser: responsiveStateReducer,
        panels,
        accounts,
        transactions,
        notification,
        loader,
        routing
    });

    if (process.env.NODE_ENV === 'production') {
        store = createStore(
            rootReducer,
            initialState,
            compose(
                createResponsiveStoreEnhancer({performanceMode: true}),
                applyMiddleware(...middlewares),
            )
        )
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

        store = createStore(
            rootReducer,
            initialState,
            compose(
                createResponsiveStoreEnhancer({performanceMode: true}),
                applyMiddleware(...middlewares),
                window.devToolsExtension ? window.devToolsExtension({ actionCreators }) : noop => noop

            )
        );
        if (window.devToolsExtension) {
            window.devToolsExtension.updateStore(store);
        }
    }

    return store;
}
