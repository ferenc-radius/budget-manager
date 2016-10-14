import React from 'react';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import loaderStyles from "./Loader.scss";

export default class Loader extends React.Component {
    render() {
        return <ProgressBar className={loaderStyles.loader} type="circular" mode="indeterminate" />
    }
}