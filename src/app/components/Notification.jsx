import React from "react";
import { Snackbar } from 'react-toolbox';


export default class Notification extends React.Component {

    static propTypes = {
        message: React.PropTypes.string,
        show: React.PropTypes.bool.isRequired,
        options: React.PropTypes.shape({
            icon: React.PropTypes.string,
            action: React.PropTypes.string,
            type: React.PropTypes.string
        })
    };

    render() {
        const {message, show, hideNotification} = this.props;
        const options = this.props.options ? this.props.options : {};
        const {icon, action, type, timeout} = options;
        return (
            <Snackbar
                active={show}
                action={action}
                icon={icon}
                label={message}
                ref='snackbar'
                type={type}
                timeout={timeout}
                onTimeout={hideNotification}
            />
        )
    }
}

