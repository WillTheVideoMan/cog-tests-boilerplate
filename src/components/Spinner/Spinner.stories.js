import React from 'react';
import Spinner from './Spinner';

export default {
    title: 'Spinner',
    component: Spinner,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['light', 'dark'] }
        }
    }
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'dark', size: 24 };
