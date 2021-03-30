import React from 'react';
import App from './App';

export default {
    title: 'App',
    component: App
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = { bruh: 'moment' };

export const BruhMoment = Template.bind({});
BruhMoment.args = { bruh: 'chungus' };
