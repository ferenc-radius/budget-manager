import React from 'react'
import {Switch} from 'react-toolbox';

const SwitchField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return <Switch checked={input.value ? true : false} label={label}  {...custom} onChange={input.onChange} />
};

export default SwitchField;
