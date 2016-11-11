import React from "react";

// redux
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from 'redux';

// ui
import App from "app/components/App";

const mapStateToProps = (state) => {
    return {
    };
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ push }, dispatch)
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
