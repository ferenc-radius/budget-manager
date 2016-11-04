import React from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { hideNotification } from "../../reducers/notification/actions";

import AccountEdit from "app/components/accounts/edit";

const mapStateToProps = (state) => {
    let accountState = state.accounts;
    let selectedAccount = accountState.selectedAccount;
    let accountDict = accountState.entities.accounts;

    return {
        initialValues: accountDict[selectedAccount]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        hideNotification
    }, dispatch)
};

const EditAccountContainer = connect(mapStateToProps, mapDispatchToProps)(AccountEdit);
export default EditAccountContainer;

