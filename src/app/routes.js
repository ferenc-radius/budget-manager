import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import TransactionList from 'app/components/Transactions';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TransactionList} />
    </Route>
);
