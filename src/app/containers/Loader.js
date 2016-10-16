import React from "react";
import { connect } from "react-redux";

import Loader from "app/components/Loader";

const mapStateToProps = (state) => {
    return {
        ...state.loader
    };
};

const LoaderContainer = connect(mapStateToProps)(Loader);
export default LoaderContainer;
