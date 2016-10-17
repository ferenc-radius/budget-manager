import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import TransactionContainer from 'app/containers/Transactions';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TransactionContainer} />
    </Route>
);
