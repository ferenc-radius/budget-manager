import React from "react";

// grid
import { Grid, Row, Col } from "react-flexbox-grid/lib/index";

import styles from "app/components/GridLayout.scss";

export default class GridLayout extends React.Component {

    render() {
        let {actionPanel, sidePanel, hasSidePanel, hasActionPanel, main} = this.props;

        let actionRow = <div />;
        if (hasActionPanel) {
            actionRow = (
                <Row>
                    <Col xsOffset={3} xs={12}>
                        {actionPanel}
                    </Col>
                </Row>
            )
        }

        let sidePanelCol = <div />;
        if (hasSidePanel) {
            let sidePanelComponent = React.createElement(sidePanel);
            sidePanelCol = (
                <Col xs={3} className={styles.sidePanel}>
                    {sidePanelComponent}
                </Col>
            )
        }

        return (
            <Grid fluid={true}>
                {actionRow}
                <Row>
                    {sidePanelCol}
                    <Col xs={hasSidePanel? 9 : 12}>
                        {main}
                    </Col>
                </Row>
            </Grid>
        )
    }

}
