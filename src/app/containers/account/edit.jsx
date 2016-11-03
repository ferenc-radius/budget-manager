import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { hideNotification } from "app/actions/notification";

import AccountEdit from "app/components/accounts/edit";

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ hideNotification }, dispatch)
};

const EditAccountContainer = connect(mapStateToProps, mapDispatchToProps)(AccountEdit);
export default EditAccountContainer;
