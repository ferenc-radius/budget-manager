import React from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {deleteTransaction} from "app/actions/transactions";

// ui
import TransactionList from "app/components/transactions/TransactionList.jsx";


const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.list
    };
};

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators({
        deleteTransaction,
    }, dispatch);

    return {
        ...actions,
        dispatch
    }
};

const TransactionContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionList);
export default TransactionContainer;
