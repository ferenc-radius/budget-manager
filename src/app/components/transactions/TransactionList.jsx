import React from "react";

// ui
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { IconButton } from 'react-toolbox';


export default class TransactionsList extends React.Component {

    static propTypes = {
        deleteTransaction: React.PropTypes.func.isRequired,
        transactionDict: React.PropTypes.object.isRequired
    };

    render() {
        let {transactionDict} = this.props;
        return (
            <List selectable>
                <ListSubHeader caption='Transactions' />
                {Object.entries(transactionDict).map(([id, transaction]) => {

                    // TODO transaction needs a field 'isInvoice'?
                    // TODO based on account it is allowed to delete certain transactions (At most situations it isnt)
                    let rightActions = [
                        //<IconButton key="delete-action" onClick={this.props.deleteTransaction.bind(this, transaction._id)} icon="delete" />,
                        <IconButton key="invoice-action" icon="receipt" onClick={() => alert("TODO create a invoice entry based on this invoice")}  />,
                        <IconButton key="category-action" icon="label" onClick={() => alert("TODO attach transaction to category")}  />,
                        <IconButton key="split-action" icon="call_split" onClick={() => alert("TODO split transaction")}  />,
                    ];


                    return (
                        <ListItem
                            key={id}
                            rightActions={rightActions}
                            caption={transaction.name}
                            legend={transaction.account? transaction.account.name : ""}
                        />
                    )
                })}
            </List>
        )
    }
}
