import React from "react";

// redux
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {loadAccounts} from "app/actions/accounts";

import {showAccountTransactions, editAccount} from "app/actions/accounts";

// ui
import AccountList from "app/components/accounts/AccountList.jsx";


const mapStateToProps = (state, ownProps) => {
    return {
        accounts: state.accounts.list
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const actions = bindActionCreators({
        editAccount: editAccount,
        onClick: showAccountTransactions
    }, dispatch);

    return {
        ...actions,
        dispatch
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class AccountPanelContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadAccounts());
    }

    render() {
        return (
            <AccountList {...this.props} />
        )
    }
}
