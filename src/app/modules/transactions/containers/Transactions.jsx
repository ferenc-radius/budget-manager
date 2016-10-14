import React from "react";

// redux
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as TransactionActions from "../actions/transactions";

// graphql
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

// ui
import TransactionList from "../components/Transactions";
import Loader from "app/components/Loader";

// transactions query
const TransactionQuery = gql`
    query Transactions {
        transactions { _id, name, account {name} }
    }
`;

const RemoveTransactionQuery = gql`
    mutation deleteTransaction($id: ID!) {
        deleteTransaction(input: {id: $id}) {
            ok
        }
    }
`;

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {actions: bindActionCreators(TransactionActions, dispatch)};
};

@graphql(TransactionQuery)
@graphql(RemoveTransactionQuery, {
    props: ({ mutate }) => ({
        deleteAction: (id) => {mutate({variables: {id}})}
    })
})
@connect(mapStateToProps, mapDispatchToProps)
export default class TransactionsContainer extends React.Component {

    deleteAction(id) {
        this.props.deleteAction(id);
        this.props.data.refetch();
    }

    render() {
        if (this.props.data.loading) {
            return <Loader />
        }

        let {transactions} = this.props.data;
        let deleteAction = this.deleteAction.bind(this);

        return (
            <TransactionList {...{deleteAction, transactions}} />
        )
    }
}
