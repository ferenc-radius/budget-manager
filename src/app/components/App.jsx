import React from "react";

// ui
import { AppBar, Checkbox, IconButton } from "react-toolbox";
import { Layout, Panel } from "react-toolbox";


// notifications and loader
import NotificationContainer from "app/containers/Notification";
import LoaderContainer from "app/containers/Loader";
import GridLayoutContainer from "app/containers/GridLayout";

import styles from "app/components/App.scss";


export default class App extends React.Component {

    render() {
        // pass the children (passed by the router) as main content for the grid-layout.
        let {children} = this.props;
        return (
            <Layout>
                <Panel>
                    <AppBar />
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
