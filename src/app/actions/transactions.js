import {RemoveTransactionQuery} from "app/queries/transactions";
import {TransactionListQuery} from "app/queries/transactions";

import {showNotification} from "app/actions/notification";
import {enableLoader, disableLoader} from "app/actions/loader";

export const TRANSACTIONS_LOADED = "TRANSACTIONS_LOADED";

export function loadTransactions(showLoader=true) {
    return function (dispatch, getState, apolloClient) {
        dispatch(enableLoader());

        apolloClient.query({
            query: TransactionListQuery,
            forceFetch: true
        }).then(
           result => dispatch(transactionLoaded(result)),
           error => noop => noop
        );
    }
}

export function transactionLoaded(result) {
    return function (dispatch, getState, apolloClient) {
        dispatch({
            type: TRANSACTIONS_LOADED,
            result
        });

        // TODO assign transactions to categories
        console.log("TODO assign transactions to categories");

        dispatch(disableLoader());
    }
}

export function deleteTransaction(id) {
    return function (dispatch, getState, apolloClient) {
        apolloClient.mutate({mutation: RemoveTransactionQuery, variables: {id}}).then((result) => {
            dispatch(loadTransactions(false));
            dispatch(showNotification("Transaction verwijderd."));
        })
    };
}