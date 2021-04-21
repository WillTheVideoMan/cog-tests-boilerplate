import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        handleClick: { action: 'handle click' },
        variant: {
            control: { type: 'select', options: ['default', 'danger', 'confirm', 'inactive'] }
        }
    }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Default', variant: 'default', loading: false };

export const Confirm = Template.bind({});
Confirm.args = { children: 'Confirm', variant: 'confirm', loading: false };

export const Danger = Template.bind({});
Danger.args = { children: 'Danger', variant: 'danger', loading: false };

export const Inactive = Template.bind({});
Inactive.args = { children: 'Inactive', variant: 'inactive', loading: false };

export const Loading = Template.bind({});
Loading.args = { children: 'Loading', variant: 'default', loading: true };
