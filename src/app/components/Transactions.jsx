import React from "react";

// redux
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as TransactionActions from "app/actions/transactions";

// graphql
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// transactions query
const TransactionQuery = gql`
    query Transactions {
        transactions { _id, name, account {name} }
    }
`;

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {actions: bindActionCreators(TransactionActions, dispatch)};
};

@graphql(TransactionQuery)
@connect(mapStateToProps, mapDispatchToProps)
export default class TransactionsList extends React.Component {

    render() {
        if (this.props.data.loading) {
            return <div key="loading">loading</div>
        }

        let { actions } = this.props;
        let {transactions} = this.props.data;

        return (<div key="transaction-list">{transactions.map(transaction => {
            return <div key={transaction._id} onClick={(event) => actions.deleteTransaction(transaction._id)}>
                {transaction.name} - {transaction.account? transaction.account.name : ""}</div>
        })}</div>)
    }
}
