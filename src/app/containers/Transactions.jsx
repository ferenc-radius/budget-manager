import React from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {deleteTransaction, loadTransactions} from "app/actions/transactions";

// ui
import TransactionList from "app/components/transactions/TransactionList.jsx";


const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactions
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(loadTransactions());
    return bindActionCreators({ deleteTransaction }, dispatch)
};


const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionList);
export default TransactionsContainer;
