import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "../fields/TextField";


@reduxForm({form: 'account', enableReinitialize: true})
export default class AccountBalanceForm extends React.Component {

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Amount</label>
                    <div>
                        <Field name="amount" component={TextField} type="text" label="amount"/>
                    </div>
                </div>
            </form>
        )
    }
}