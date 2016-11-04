import {AccountListQuery} from "app/queries/accounts";
import {enableLoader, disableLoader} from "../loader/actions";
import {push} from "react-router-redux";
import {ACCOUNTS_LOADED, ACCOUNT_SELECTED, ACCOUNT_EDIT} from "./actionTypes";
import { Schema, arrayOf, normalize } from "normalizr";


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

        // normalize data
        const accountSchema = new Schema(
            'accounts', { idAttribute: '_id' }
        );
        let results = normalize(result.data, {accounts: arrayOf(accountSchema)});

        dispatch({
            type: ACCOUNTS_LOADED,
            results
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
        dispatch(push(`/account/${id}/edit`))
    }
}