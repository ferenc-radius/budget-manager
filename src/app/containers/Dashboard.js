import React from "react";
import {PanelType} from "app/types/panel";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setSidePanel } from "app/reducers/panel/actions";

// ui
import DashBoard from "app/components/DashBoard";

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators({
        setSidePanel
    }, dispatch);

    return {
        ...actions,
        dispatch
    }
};


@connect(mapStateToProps, mapDispatchToProps)
export default class DashboardContainer extends React.Component {

    componentDidMount   () {
        this.props.setSidePanel(PanelType.NONE.name);
    }

    render() {
        return (
            <DashBoard {...this.props} />
        )
    }
}

