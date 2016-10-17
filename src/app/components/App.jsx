import React from "react";

// ui
import { AppBar, Checkbox, IconButton } from "react-toolbox";
import { Layout, NavDrawer, Panel, Sidebar } from "react-toolbox";
import FontIcon from "react-toolbox/lib/font_icon";


// notifications and loader
import NotificationContainer from "app/containers/Notification";
import LoaderContainer from "app/containers/Loader";
import GridLayoutContainer from "app/containers/GridLayout";

import styles from "app/components/App.scss";


export default class App extends React.Component {
    state = {
        drawerActive: false,
        drawerPinned: false
    };

    toggleDrawerActive() {
        this.setState({ drawerActive: !this.state.drawerActive });
    }

    render() {
        // pass the children (passed by the router) as main content for the grid-layout.
        let {children} = this.props;
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                           pinned={this.state.drawerPinned} permanentAt="xxxl"
                           onOverlayClick={::this.toggleDrawerActive}>
                    <p>
                        <FontIcon value="add" />
                    </p>
                </NavDrawer>
                <Panel>
                    <AppBar>
                        <IconButton icon="menu" inverse={ true } onClick={::this.toggleDrawerActive }/>
                    </AppBar>
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
