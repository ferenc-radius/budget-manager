import React from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { deleteTransaction, loadTransactions } from "../reducers/transaction/actions";

// ui
import TransactionList from "app/components/transactions/TransactionList.jsx";


const mapStateToProps = (state) => {
    return {
        selectedAccount: state.accounts.selectedAccount,
        transactionDict: state.transactions.entities.transactions
    };
};

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators({
        deleteTransaction,
        loadTransactions
    }, dispatch);

    return {
        ...actions,
        dispatch
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TransactionsContainer extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.selectedAccount != prevProps.selectedAccount) {
            this.props.loadTransactions();
        }
    }

    componentDidMount   () {
        this.props.loadTransactions();
    }

    render() {
        return (
            <TransactionList {...this.props} />
        )
    }
}
