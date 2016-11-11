import React from "react";
import {connect} from "react-redux";
import {PanelType} from "app/types/panel";
import { bindActionCreators } from 'redux';

import GridLayout from "app/components/GridLayout";

const mapStateToProps = (state) => {
    let {panels} = state;
    let hasSidePanel = "sidePanel" in panels && panels.sidePanel != null;
    let hasActionPanel = "actionPanel" in panels && panels.actionPanel != null;
    let actionPanel = hasActionPanel? PanelType.getByName(panels.actionPanel).getComponent() : null;
    let sidePanel = hasSidePanel? PanelType.getByName(panels.sidePanel).getComponent() : null;

    let mediumSize = state.browser.greaterThan.medium;

    return {
        mediumSize,
        actionPanel,
        sidePanel,
        hasSidePanel,
        hasActionPanel
    };
};

const GridLayoutContainer = connect(mapStateToProps)(GridLayout);
export default GridLayoutContainer;