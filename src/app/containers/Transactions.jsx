import React from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {deleteTransaction} from "app/actions/transactions";
import {setSidePanel, setActionPanel} from "app/actions/panels";

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

@connect(mapStateToProps, mapDispatchToProps)
export default class TransactionsContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(setSidePanel("accounts"));
    }

    render() {
        return (
            <TransactionList {...this.props} />
        )
    }
}
