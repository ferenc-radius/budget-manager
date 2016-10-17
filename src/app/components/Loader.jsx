import React from 'react';
import classNames from 'classnames';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import loaderStyles from "./Loader.scss";

export default class Loader extends React.Component {
    render() {
        const {enabled} = this.props;
        let className = {
            [loaderStyles.disabled]: !enabled,
            [loaderStyles.enabled]: enabled
        };

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