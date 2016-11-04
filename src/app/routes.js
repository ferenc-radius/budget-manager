import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "app/components/App";
import TransactionContainer from "app/containers/Transactions";
import EditAccountContainer from "app/containers/account/edit";

import {store} from "client/index";
import {selectAccount} from "app/reducers/account/actions";
import {loadTransactions} from "app/reducers/transaction/actions";


// TODO THIS should be a middleware?
function mapParamsToState(props, actions) {
    let {params} = props;
    Object.entries(params).map(([key, value]) => {
        switch (key) {
            case "accountId":
                store.dispatch(selectAccount(value));
            break;
        }
    });

    if (actions) {
        actions.map(a => store.dispatch(a()));
    }
}


export default (
    <Route path="/" components={App} onEnter={(props) => mapParamsToState(props)}>
        <IndexRoute component={TransactionContainer} />
        <Route path="/account/:accountId/transactions"
               component={TransactionContainer}
               onEnter={(props) => mapParamsToState(props, [loadTransactions])}
        />
        <Route path="/account/:accountId/edit"
               component={EditAccountContainer}
               onEnter={(props) => mapParamsToState(props)} />
    </Route>
);
