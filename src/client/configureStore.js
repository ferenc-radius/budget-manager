import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { browserHistory } from "react-router";
import createLogger from "redux-logger";

import { routerMiddleware } from "react-router-redux";
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


    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    if (process.env.NODE_ENV === 'production') {
        store = createStore(
            rootReducer,
            initialState,
            composeEnhancers(
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

        store = createStore(
            rootReducer,
            initialState,
            composeEnhancers(
                createResponsiveStoreEnhancer({performanceMode: true}),
                applyMiddleware(...middlewares)

            )
        );
    }

    return store;
}
