import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        handleClick: { action: 'handle click' },
        variant: {
            control: { type: 'select', options: ['default', 'danger', 'confirm', 'ghost'] }
        }
    }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
    variant: 'default',
    active: true,
    loading: false,
    fullWidth: false
};

export const Confirm = Template.bind({});
Confirm.args = {
    children: 'Confirm',
    variant: 'confirm',
    active: true,
    loading: false,
    fullWidth: false
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger',
    variant: 'danger',
    active: true,
    loading: false,
    fullWidth: false
};

export const Inactive = Template.bind({});
Inactive.args = {
    children: 'Inactive',
    variant: 'ghost',
    active: false,
    loading: false,
    fullWidth: false
};

export const Loading = Template.bind({});
Loading.args = {
    children: 'Loading',
    variant: 'default',
    active: true,
    loading: true,
    fullWidth: false
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: 'Full Width',
    variant: 'default',
    active: true,
    loading: false,
    fullWidth: true
};
