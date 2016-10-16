import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { hideNotification } from "app/actions/notification";

import Notification from "app/components/Notification";

const mapStateToProps = (state) => {
    return {
        ...state.notification
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ hideNotification }, dispatch)
};

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification);
export default NotificationContainer;

