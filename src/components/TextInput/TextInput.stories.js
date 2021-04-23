import React from 'react';
import TextInput from './TextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['default', 'ghost'] }
        }
    }
};

const Template = (args) => (
    <Formik
        initialValues={{
            email: ''
        }}
        validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required')
        })}>
        <TextInput {...args} />
    </Formik>
);

export const Default = Template.bind({});
Default.args = {
    label: 'Email Address',
    variant: 'default',
    disabled: false,
    name: 'email',
    type: 'email',
    placeholder: 'joe@smith.com'
};

export const Inactive = Template.bind({});
Inactive.args = {
    label: 'Email Address',
    variant: 'ghost',
    disabled: true,
    name: 'email',
    type: 'email',
    placeholder: 'joe@smith.com'
};
