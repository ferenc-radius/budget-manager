import React from "react";

// redux
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
    loadAccounts, showAccountTransactions, editAccount, addAccountBalance
} from "app/reducers/account/actions";

// ui
import AccountList from "app/components/accounts/AccountList.jsx";


const mapStateToProps = (state, ownProps) => {
    return {
        accountDict: state.accounts.entities.accounts
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const actions = bindActionCreators({
        editAccount: editAccount,
        addAccountBalance: addAccountBalance,
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
