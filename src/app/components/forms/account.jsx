import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "../fields/input";


@reduxForm({form: 'account', enableReinitialize: true})
export default class AccountForm extends React.Component {

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field name="name" component={TextField} type="text" label="name"/>
                    </div>
                </div>

                <Field name="number" component={TextField} type="text" label="number"/>
            </form>
        )
    }
}