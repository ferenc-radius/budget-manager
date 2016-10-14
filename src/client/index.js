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

// theme
import { ThemeProvider } from 'react-css-themr';
import componentTheme from "app/theme/dropdown.scss";
const contextTheme = {
    RTDropdown: componentTheme
};

// create connection with graphql (TODO add path to settings)
const client = new ApolloClient({
    networkInterface: createNetworkInterface('http://localhost:8000/graphql'),
});

const store = configureStore(client);
export default store;

const history = syncHistoryWithStore(browserHistory, store);

// click fix thingie
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
    <ThemeProvider theme={contextTheme}>
        <ApolloProvider store={store} client={client}>
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        </ApolloProvider>
    </ThemeProvider>,
    document.getElementById('render-target')
);
