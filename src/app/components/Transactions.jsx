import React from "react";

// redux
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as TransactionActions from "app/actions/transactions";

// graphql
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// ui
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import FontAwesome from 'react-fontawesome';

import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

// transactions query
const TransactionQuery = gql`query Transactions {
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

    state = {value: 1};

    handleChange(value) {
        this.setState({value});
    }

    render() {
        if (this.props.data.loading) {
            return <div key="loading">loading</div>
        }

        let { actions } = this.props;
        let {transactions} = this.props.data;

        return (
            <Grid fluid={true}>
                <Row>
                    <Col xs={9}>
                    <List selectable>
                        <ListSubHeader caption='Transactions' />
                        {transactions.map(transaction => {
                            return (
                                <ListItem
                                    onClick={(event) => actions.deleteTransaction(transaction._id)}
                                    key={transaction._id}
                                    caption={transaction.name}
                                    legend={transaction.account? transaction.account.name : ""}
                                />
                            )
                        })}
                        {transactions.map(transaction => {
                            return (
                                <ListItem
                                    onClick={(event) => actions.deleteTransaction(transaction._id)}
                                    key={transaction._id}
                                    caption={transaction.name}
                                    legend={transaction.account? transaction.account.name : ""}
                                />
                            )
                        })}
                        {transactions.map(transaction => {
                            return (
                                <ListItem
                                    onClick={(event) => actions.deleteTransaction(transaction._id)}
                                    key={transaction._id}
                                    caption={transaction.name}
                                    legend={transaction.account? transaction.account.name : ""}
                                />
                            )
                        })}
                        {transactions.map(transaction => {
                            return (
                                <ListItem
                                    onClick={(event) => actions.deleteTransaction(transaction._id)}
                                    key={transaction._id}
                                    caption={transaction.name}
                                    legend={transaction.account? transaction.account.name : ""}
                                />
                            )
                        })}
                    </List>
                    </Col>
                    <Col xs={3} >
                        <div>test</div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
