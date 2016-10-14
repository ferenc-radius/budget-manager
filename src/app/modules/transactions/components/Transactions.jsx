import React from "react";

// ui
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { IconButton } from 'react-toolbox';
import FontAwesome from 'react-fontawesome';


export default class TransactionsList extends React.Component {

    static propTypes = {
        deleteAction: React.PropTypes.func.isRequired,
        transactions: React.PropTypes.array.isRequired
    };

    render() {
        let {transactions} = this.props;
        return (
            <List selectable>
                <ListSubHeader caption='Transactions' />
                {transactions.map(transaction => {
                    return (
                        <ListItem
                            key={transaction._id}
                            rightIcon={
                                <IconButton onClick={::this.props.deleteAction.bind(this, transaction._id)} icon="delete" />
                            }
                            caption={transaction.name}
                            legend={transaction.account? transaction.account.name : ""}
                        />
                    )
                })}
            </List>
        )
    }
}
