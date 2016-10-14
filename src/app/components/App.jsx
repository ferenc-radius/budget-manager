import React from 'react';

// ui
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import FontIcon from 'react-toolbox/lib/font_icon';

// grid
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';


import styles from "app/components/App.scss";

export default class App extends React.Component {
    // TODO define props (panels + main)

    state = {
        drawerActive: false,
        drawerPinned: false
    };

    toggleDrawerActive() {
        this.setState({ drawerActive: !this.state.drawerActive });
    }

    render() {
        const { main, sidePanel, actionPanel } = this.props;

        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                           pinned={this.state.drawerPinned} permanentAt='xxxl'
                           onOverlayClick={::this.toggleDrawerActive }>
                    <p>
                        <FontIcon value='add' />
                    </p>
                </NavDrawer>
                <Panel>
                    <AppBar>
                        <IconButton icon='menu' inverse={ true } onClick={::this.toggleDrawerActive }/>
                    </AppBar>
                    <div className={styles.appPanel}>
                        <Grid fluid={true}>
                            <Row>
                                <Col xsOffset={3} xs={12}>
                                    {actionPanel}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    {sidePanel}
                                </Col>
                                <Col xs={9}>
                                    {main}
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    <footer><p>Current version: {VERSION}</p></footer>
                </Panel>
            </Layout>
        )
    }
}
