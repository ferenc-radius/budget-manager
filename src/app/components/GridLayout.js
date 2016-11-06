import React from "react";

// grid
import { Grid, Row, Col } from "react-flexbox-grid/lib/index";
import classNames from 'classnames';


import styles from "app/components/GridLayout.scss";

export default class GridLayout extends React.Component {

    render() {
        let {actionPanel, sidePanel, hasSidePanel, hasActionPanel, main, mediumSize} = this.props;
        // TODO splitup this method

        let mainColumns = 12;
        let panelColumns = 12;
        if (mediumSize) {
            panelColumns = 4;
            mainColumns = hasSidePanel? 8 : 12
        }

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

            let enabledClassNames = classNames({
                [styles.sidePanel]: true,
                [styles.aside]: mediumSize
            });

            sidePanelCol = (
                <Col key="sidebar" xs={panelColumns} className={enabledClassNames}>
                    {sidePanelComponent}
                </Col>
            )
        }

        return (
            <Grid fluid={true}>
                {actionRow}
                <Row>
                    {sidePanelCol}
                    <Col xs={mainColumns}>
                        {main}
                    </Col>
                </Row>
            </Grid>
        )
    }

}
