import React from 'react';

import { Grid, Row, Col } from "react-flexbox-grid/lib/index";

export default class Loader extends React.Component {
    render() {

        return (
            <Grid fluid={true}>
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Invoice overview</h3>
                        <p>Overview grouped by category showing w</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Category overview </h3>
                        <p>(show root, with tree structure seperated by 'in' en 'out')</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Overview of totals and budgets</h3>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>pie chart with in-out</h3>
                    </Col>
                </Row>
            </Grid>
        )
    }
}