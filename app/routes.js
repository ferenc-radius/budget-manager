import React from 'react';
import { Route, IndexRoute } from 'react-router';

// redux
import { Provider } from 'react-redux'

import App from './components/App';
import TransactionList from './components/Transactions';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TransactionList} />
    </Route>
);
