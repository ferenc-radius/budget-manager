import React from 'react'
import {Input} from 'react-toolbox';

const TextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return <Input hint={label} label={label} error={error} {...input} {...custom} />
};

export default TextField;
