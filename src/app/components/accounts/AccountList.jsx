import React from 'react';

import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import {IconMenu, MenuItem } from 'react-toolbox/lib/menu';

export default class AccountList extends React.Component {

    render() {
        const {accounts, onClick, editAccount} = this.props;

        return (
            <List selectable>
                <ListSubHeader caption='Accounts' />
                {accounts.map(account => {
                    let rightActions = [
                        <IconMenu id="menu" key="menu" icon='more_vert' position='topRight' menuRipple
                                  onClick={(event) => event.stopPropagation()}>
                            <MenuItem value='edit' icon='edit' caption='Edit' onClick={() => editAccount(account._id)}  />
                        </IconMenu>
                    ];

                    return (
                        <ListItem
                            onClick={(event) => onClick(account._id)}
                            key={account._id}
                            caption={account.name}
                            legend={account.number}
                            rightActions={rightActions}
                         />
                    )
                })}
            </List>
        )
    }
}
