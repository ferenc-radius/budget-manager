import React from 'react';
import { render } from 'react-dom';

// react-router/redux
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'

// routes and store
import routes from 'app/routes';
import configureStore from './configureStore';

const store = configureStore();
export default store;

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('render-target')
);
