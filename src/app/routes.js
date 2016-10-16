import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import TransactionContainer from 'app/containers/Transactions';
import TestSidePanel from 'app/components/sidepanels/Test';
import TestActionPanel from 'app/components/actionpanels/Test';

export default (
    <Route path="/" component={App}>
        <IndexRoute components={{main: TransactionContainer, sidePanel: TestSidePanel, actionPanel: TestActionPanel}} />
    </Route>
);
