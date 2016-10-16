import React from 'react';
import classNames from 'classnames';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import loaderStyles from "./Loader.scss";

export default class Loader extends React.Component {
    render() {
        const {enabled} = this.props;
        let className = {};
        className[loaderStyles.disabled] = !enabled;
        className[loaderStyles.enabled] = enabled;
        className[loaderStyles.expose] = true;

        const enabledClass = classNames(className);

        return (
            // TODO implement animation https://facebook.github.io/react/docs/animation.html?
            <div className={enabled}>
                <div className={enabledClass}>
                    <ProgressBar className={loaderStyles.loader} type="circular" mode="indeterminate" />
                </div>
            </div>
        )
    }
}