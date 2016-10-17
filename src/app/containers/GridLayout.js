import React from "react";
import {connect} from "react-redux";
import _ from "lodash";

import GridLayout from "app/components/GridLayout";

// TODO where to put this? > the enum thing
import AccountPanel from "app/containers/sidepanels/AccountPanel";

const panelMap = {
    accounts: AccountPanel
};

const mapStateToProps = (state) => {

    // transform array to object {panel_type: panelComponent}
    let panels = state.panels.map(p => {
        return {[p.type]: p.name};
    }).reduce((o, panel) => {
        let key = Object.keys(panel)[0];
        o[_.camelCase(key)] = panelMap[panel[key]];
        return o
    }, {});

    return {
        ...panels,
        hasSidePanel: "sidePanel" in panels,
        hasActionPanel: "actionPanel" in panels
    };
};

const GridLayoutContainer = connect(mapStateToProps)(GridLayout);
export default GridLayoutContainer;