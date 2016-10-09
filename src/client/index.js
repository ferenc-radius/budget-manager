import React from 'react';
import { render } from 'react-dom';

// react-router/redux
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'

// routes and store
import routes from 'app/routes';
import configureStore from './configureStore';

// apollo graphql client
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const store = configureStore();
export default store;

const history = syncHistoryWithStore(browserHistory, store);

// create connection with graphql (TODO add path to settings)
const client = new ApolloClient({
    networkInterface: createNetworkInterface('http://localhost:8000/graphql'),
});

render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </ApolloProvider>,
    document.getElementById('render-target')
);
