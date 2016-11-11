import React from "react";
import { Route, IndexRoute } from "react-router";

import AppContainer from "app/containers/App";
import DashboardContainer from "app/containers/Dashboard";
import TransactionContainer from "app/containers/transactions/list";
import EditAccountContainer from "app/containers/account/edit";
import AddBalanceContainer from "app/containers/account/balance"

import {store} from "client/index";
import {selectAccount} from "app/reducers/account/actions";


// TODO THIS should be a middleware?
function mapParamsToState(props) {
    let {params} = props;
    Object.entries(params).map(([key, value]) => {
        switch (key) {
            case "accountId":
                store.dispatch(selectAccount(value));
            break;
        }
    });
}


export default (
    <Route path="/" components={AppContainer} onEnter={(props) => mapParamsToState(props)}>
        <IndexRoute component={DashboardContainer} />
        <Route path="/account/"
               component={TransactionContainer}
        />
        <Route path="/account/:accountId/transactions"
               component={TransactionContainer}
               onEnter={(props) => mapParamsToState(props)}
        />
        <Route path="/account/:accountId/edit"
               component={EditAccountContainer}
               onEnter={(props) => mapParamsToState(props)}
        />
        <Route path="/account/:accountId/add_balance"
               component={AddBalanceContainer}
               onEnter={(props) => mapParamsToState(props)}
        />
    </Route>
);
