import React from 'react';

import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import {IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import Chip from 'react-toolbox/lib/chip';
import styles from "./AccountList.scss";
import FontIcon from 'react-toolbox/lib/font_icon';
import Avatar from 'react-toolbox/lib/avatar';


export default class AccountList extends React.Component {

    render() {
        const {accountDict, onClick, editAccount} = this.props;

        return (
            <List selectable>
                <ListSubHeader caption='Accounts' />
                {Object.entries(accountDict).map(([id, account]) => {
                    // TODO ADD last-balance
                    let rightActions = [
                        <Chip className={styles.balance}>
                            <Avatar><FontIcon value="account_balance"/></Avatar>
                            12345,00
                        </Chip>,
                        <IconMenu id="menu" key="menu" icon='more_vert' position='topRight' menuRipple
                                  onClick={(event) => event.stopPropagation()}>
                            <MenuItem value='edit' icon='edit' caption='Edit' onClick={() => editAccount(id)}  />
                            <MenuItem value='add-balance' caption='Add balance' icon='account_balance' onClick={() => alert("implement add balanace") }/>
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
