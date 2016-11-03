import React from "react";
import {connect} from "react-redux";

import GridLayout from "app/components/GridLayout";
import AccountPanel from "app/containers/sidepanels/AccountPanel";

const panelMap = {
    accounts: AccountPanel
};

const mapStateToProps = (state) => {
    let {panels} = state;
    let hasSidePanel = "sidePanel" in panels;
    let hasActionPanel = "actionPanel" in panels;
    let actionPanel = hasActionPanel? panelMap[panels.actionPanel] : null;
    let sidePanel = hasSidePanel? panelMap[panels.sidePanel] : null;

    return {
        actionPanel,
        sidePanel,
        hasSidePanel,
        hasActionPanel
    };
};

const GridLayoutContainer = connect(mapStateToProps)(GridLayout);
export default GridLayoutContainer;