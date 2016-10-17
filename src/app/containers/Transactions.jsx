import React from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {deleteTransaction, loadTransactions} from "app/actions/transactions";
import {setSidePanel, setActionPanel} from "app/actions/panels";

// ui
import TransactionList from "app/components/transactions/TransactionList.jsx";


const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.list
    };
};

const mapDispatchToProps = (dispatch) => {
    dispatch(loadTransactions());
    dispatch(setSidePanel("accounts"));  // TODO panel enum ?
    // dispatch(setActionPanel("foobar"));  // TODO panel enum ?
    return bindActionCreators({ deleteTransaction }, dispatch)
};


const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionList);
export default TransactionsContainer;
