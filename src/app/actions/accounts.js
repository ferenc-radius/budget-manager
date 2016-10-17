import {AccountListQuery} from "app/queries/accounts";
import {enableLoader, disableLoader} from "app/actions/loader";

export const ACCOUNTS_LOADED = "ACCOUNTS_LOADED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";

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

export function selectAccount(id) {
    return function (dispatch, getState, apolloClient) {
        // dispatch();
        dispatch({
            type: ACCOUNT_SELECTED,
            id
        });
    }
}