import React from "react";

// redux
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as TransactionActions from "../actions/transactions";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {actions: bindActionCreators(TransactionActions, dispatch)};
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TransactionsList extends React.Component {

    render() {
        let { actions } = this.props;
        let transactions = [{_id: "1", name: "test7"}];
        return (<div>{transactions.map(transaction => {
            return <div key={transaction._id} onClick={(event) => actions.deleteTransaction(transaction._id)}>{transaction.name}</div>
        })}</div>)
    }
}
