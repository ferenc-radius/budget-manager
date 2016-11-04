import React from 'react';

import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import {IconMenu, MenuItem } from 'react-toolbox/lib/menu';

export default class AccountList extends React.Component {

    render() {
        const {accountDict, onClick, editAccount} = this.props;

        return (
            <List selectable>
                <ListSubHeader caption='Accounts' />
                {Object.entries(accountDict).map(([id, account]) => {
                    let rightActions = [
                        <IconMenu id="menu" key="menu" icon='more_vert' position='topRight' menuRipple
                                  onClick={(event) => event.stopPropagation()}>
                            <MenuItem value='edit' icon='edit' caption='Edit' onClick={() => editAccount(id)}  />
                        </IconMenu>
                    ];

                    return (
                        <ListItem
                            onClick={(event) => onClick(id)}
                            key={id}
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
