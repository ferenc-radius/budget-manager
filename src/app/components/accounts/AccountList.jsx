import React from 'react';

import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

export default class AccountList extends React.Component {

    render() {
        const {accounts, onClick} = this.props;
        return (
            <List selectable>
                <ListSubHeader caption='Accounts' />
                {accounts.map(account => {
                    return (
                        <ListItem
                            onClick={() => onClick(account._id)}
                            key={account._id}
                            caption={account.name}
                            legend={account.number}
                        />
                    )
                })}
            </List>
        )
    }
}
