import React from 'react';
import TextInput from './TextInput';

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        handleInput: { action: 'handle input' },
        variant: {
            control: { type: 'select', options: ['default', 'ghost'] }
        }
    }
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '',
    label: 'Email',
    placeholder: 'joe@smith.com',
    variant: 'default',
    active: true
};

export const Inactive = Template.bind({});
Inactive.args = {
    value: '',
    label: 'Email',
    placeholder: 'joe@smith.com',
    variant: 'ghost',
    active: false
};
