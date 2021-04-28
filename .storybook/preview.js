import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GlobalStyle from '../src/components/GlobalStyle';

const StorybookStyles = createGlobalStyle`
    #root{
        height: 100%;
    }
`;

export const decorators = [
    (Story) => (
        <>
            <GlobalStyle />
            <StorybookStyles />
            <Story />
        </>
    )
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};
