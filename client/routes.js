import React from 'react';
import { Route, IndexRoute } from 'react-router';

// redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from '/client/components/App';
import TransactionList from '/client/components/Transactions';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TransactionList} />
    </Route>
);
