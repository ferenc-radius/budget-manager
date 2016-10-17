import React from "react";

// redux
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {loadAccounts} from "app/actions/accounts";

import {selectAccount} from "app/actions/accounts";

// ui
import AccountList from "app/components/accounts/AccountList.jsx";


const mapStateToProps = (state) => {
    return {
        accounts: state.accounts.list
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(loadAccounts());
    return bindActionCreators({ onClick: selectAccount }, dispatch);
};


const AccountPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AccountList);
export default AccountPanelContainer;
