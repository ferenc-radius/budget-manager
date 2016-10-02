import React from "react";
import { Meteor } from 'meteor/meteor';

// redux
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as TransactionActions from "/client/actions/transactions";

// data
import subscribe from '/client/meteor-subscribe-decorator';
import Transactions from '/app/api/transactions';
import reactMixin from 'react-mixin';
import {ReactMeteorData} from 'meteor/react-meteor-data';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {actions: bindActionCreators(TransactionActions, dispatch)};
};

@subscribe({name: "transactions"})
@connect(mapStateToProps, mapDispatchToProps)
@reactMixin.decorate(ReactMeteorData)
export default class TransactionsList extends React.Component {

    getMeteorData() {
        return {
            transactions: Transactions.find().fetch()
        }
    }

    render() {
        let { actions } = this.props;
        let { transactions } = this.data;
        return (<div>{transactions.map(transaction => {
            return <div key={transaction._id} onClick={(event) => actions.deleteTransaction(transaction._id)}>{transaction.name}</div>
        })}</div>)
    }
}
