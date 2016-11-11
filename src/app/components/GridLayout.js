import React from "react";

// grid
import { Grid, Row, Col } from "react-flexbox-grid/lib/index";
import classNames from 'classnames';


import styles from "app/components/GridLayout.scss";

export default class GridLayout extends React.Component {

    render() {
        let {actionPanel, sidePanel, hasSidePanel, hasActionPanel, main, mediumSize} = this.props;
        let mainColumns = hasSidePanel? 8 : 12;

        let actionRow = <div />;
        if (hasActionPanel) {
            actionRow = (
                <Row>
                    <Col xsOffset={3} xs={12} >
                        {actionPanel}
                    </Col>
                </Row>
            )
        }

        let sidePanelCol = <div />;
        if (hasSidePanel) {
            let sidePanelComponent = React.createElement(sidePanel);

            let enabledClassNames = classNames({
                [styles.sidePanel]: true,
                [styles.aside]: mediumSize
            });

            sidePanelCol = (
                <Col key="sidebar" xs={12} md={4} className={enabledClassNames}>
                    {sidePanelComponent}
                </Col>
            )
        }

        return (
            <Grid fluid={true}>
                {actionRow}
                <Row>
                    {sidePanelCol}
                    <Col xs={12} md={mainColumns}>
                        {main}
                    </Col>
                </Row>
            </Grid>
        )
    }

}
