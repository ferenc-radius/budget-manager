import React from "react";

// ui
import { AppBar, Checkbox, IconButton } from "react-toolbox";
import { Layout, Panel, NavDrawer } from "react-toolbox";

import { List, ListItem, ListSubHeader } from "react-toolbox/lib/list";

// notifications and loader
import NotificationContainer from "app/containers/Notification";
import LoaderContainer from "app/containers/Loader";
import GridLayoutContainer from "app/containers/GridLayout";

import styles from "app/components/App.scss";


export default class App extends React.Component {
    state = {
        drawerActive: false
    };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    render() {
        // pass the children (passed by the router) as main content for the grid-layout.
        let {children, push} = this.props;
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive} onOverlayClick={ this.toggleDrawerActive }>
                    <List selectable>
                        <ListItem leftIcon="dashboard" caption="Dashboard" onClick={() => push("/")} />
                        <ListItem leftIcon="credit_card" caption="Transactions" onClick={() => push("/account/")} />
                        <ListItem leftIcon="monetization_on" caption="Budgets" />
                        <ListItem leftIcon="receipt" caption="Invoices" />
                        <ListItem leftIcon="file_upload" caption="Import"/>
                        <ListItem leftIcon="category" caption="Categories"/>
                        <ListItem leftIcon="settings" caption="Settings"/>
                    </List>
                </NavDrawer>
                <Panel>
                    <AppBar><IconButton icon="menu" onClick={ this.toggleDrawerActive }/></AppBar>
                    <div className={styles.appPanel}>
                        <LoaderContainer />
                        <GridLayoutContainer main={children} />
                    </div>
                    <footer>
                        <NotificationContainer />
                        <p>Current version: {VERSION}</p>
                    </footer>
                </Panel>
            </Layout>
        )
    }
}
