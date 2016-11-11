import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "../fields/TextField";
import SwitchField from "../fields/Switch";


@reduxForm({form: 'account', enableReinitialize: true})
export default class AccountForm extends React.Component {

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" component={TextField} type="text" label="name"/>
                <Field name="number" component={TextField} type="text" label="number"/>
                <Field name="own_account" component={SwitchField} type="text" label="own_account"/>
                <Field name="savings" component={SwitchField} type="text" label="savings"/>
            </form>
        )
    }
}