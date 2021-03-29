import React from 'react';
import App from './App';
import mdx from './App.mdx';

export default {
    title: 'App',
    component: App,
    parameters: {
        docs: {
            page: mdx
        }
    }
};

export const Default = () => <App />;
