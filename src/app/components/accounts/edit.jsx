import React from 'react';
import AccountForm from "app/components/forms/account";


export default class AccountEdit extends React.Component {

    render() {
        return (
            <div>
                <AccountForm initialValues={this.props.initialValues} />
            </div>
        )
    }
}
