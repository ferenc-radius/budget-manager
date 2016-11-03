import {AccountListQuery} from "app/queries/accounts";
import {enableLoader, disableLoader} from "app/actions/loader";
import {push} from "react-router-redux";

export const ACCOUNTS_LOADED = "ACCOUNTS_LOADED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";
export const ACCOUNT_EDIT = "ACCOUNT_EDIT";

export function loadAccounts(own_accounts=true) {
    return function (dispatch, getState, apolloClient) {
        dispatch(enableLoader());

        apolloClient.query({
            query: AccountListQuery,
            forceFetch: true,
            variables: {
                own_account: own_accounts
            }
        }).then(
            result => dispatch(accountsLoaded(result)),
            error => noop => noop
        );
    }
}

export function accountsLoaded(result) {
    return function (dispatch, getState, apolloClient) {
        dispatch({
            type: ACCOUNTS_LOADED,
            result
        });

        dispatch(disableLoader());
    }
}

export function showAccountTransactions(id) {
    return function (dispatch, getState, apolloClient) {
        dispatch(push(`/account/${id}/transactions`));
    }
}

export function selectAccount(id) {
    return function (dispatch, getState, apolloClient) {
        dispatch({
            type: ACCOUNT_SELECTED,
            id
        });
    }
}

export function editAccount(id) {
    return function (dispatch, getState, apolloClient) {
        dispatch({
            type: ACCOUNT_EDIT,
            id
        });

        dispatch(push(`/account/${id}/edit`))
    }
}