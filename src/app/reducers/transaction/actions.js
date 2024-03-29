import { RemoveTransactionQuery } from "../../queries/transactions";
import { TransactionListQuery } from "../../queries/transactions";

import { showNotification} from "../notification/actions";
import { enableLoader, disableLoader} from "../loader/actions";
import { Schema, arrayOf, normalize } from "normalizr";

import { TRANSACTIONS_LOADED } from "./actionTypes";

export function loadTransactions(forceFetch=false) {
    return function (dispatch, getState, apolloClient) {
        dispatch(enableLoader());

        // query all transactions from selected account
        const currentState = getState();
        const accountId = currentState.accounts.selectedAccount;

        apolloClient.query({
            query: TransactionListQuery,
            forceFetch: forceFetch,
            variables: {
                accountId
            }
        }).then(
           result => dispatch(transactionLoaded(result)),
           error => noop => noop
        );
    }
}

export function transactionLoaded(result) {
    return function (dispatch, getState, apolloClient) {

        // normalize data
        const transactionSchema = new Schema(
            'transactions', { idAttribute: '_id' }
        );
        let results = normalize(result.data.account, {transactions: arrayOf(transactionSchema)});
        if (!results.entities.transactions) results.entities.transactions = {};

        dispatch({
            type: TRANSACTIONS_LOADED,
            results
        });

        dispatch(disableLoader());
    }
}

export function deleteTransaction(id) {
    return function (dispatch, getState, apolloClient) {
        apolloClient.mutate({mutation: RemoveTransactionQuery, variables: {id}}).then((result) => {
            dispatch(loadTransactions(true));
            dispatch(showNotification("Transaction verwijderd."));
        })
    };
}