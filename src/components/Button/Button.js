import styled from 'styled-components';
import { COLORS, SHADOWS } from '../../constants';
import Spinner from '../Spinner';

const Wrapper = styled.button`
    position: relative;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;

    color: var(--button-color);

    cursor: var(--button-cursor);

    background-color: var(--button-background-color);

    &:hover {
        background-color: var(--button-background-color--hover);
        box-shadow: var(--button-box-shadow--hover);
    }
`;

const ChildrenWrapper = styled.div`
    opacity: var(--children-opacity);

    font-size: ${16 / 16}rem;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const SpinnerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
`;

const VARIANTS = {
    default: {
        '--button-cursor': 'pointer',
        '--button-color': COLORS.white,
        '--button-background-color': COLORS.primary.default,
        '--button-background-color--hover': COLORS.primary.darker,
        '--button-box-shadow--hover': SHADOWS.small
    },
    danger: {
        '--button-cursor': 'pointer',
        '--button-color': COLORS.white,
        '--button-background-color': COLORS.bad.default,
        '--button-background-color--hover': COLORS.bad.darker,
        '--button-box-shadow--hover': SHADOWS.small
    },
    confirm: {
        '--button-cursor': 'pointer',
        '--button-color': COLORS.grey[200],
        '--button-background-color': COLORS.good.default,
        '--button-background-color--hover': COLORS.good.darker,
        '--button-box-shadow--hover': SHADOWS.small
    },
    inactive: {
        '--button-cursor': 'not-allowed',
        '--button-color': COLORS.grey[200],
        '--button-background-color': COLORS.grey[800],
        '--button-background-color--hover': COLORS.grey[800],
        '--button-box-shadow--hover': null
    }
};

const STATES = {
    loading: {
        '--children-opacity': 0
    },
    active: {
        '--children-opacity': 1
    }
};

const Button = ({ handleClick, variant, loading, children, ...delegated }) => {
    const wrappperStyles = VARIANTS[variant];
    const childrenStyles = STATES[loading ? 'loading' : 'active'];

    if (!wrappperStyles) throw new Error(`No button variant found for variant: ${variant}`);

    return (
        <Wrapper {...delegated} style={wrappperStyles} onClick={handleClick}>
            <ChildrenWrapper style={childrenStyles}>{children}</ChildrenWrapper>
            {loading && (
                <SpinnerWrapper>
                    <Spinner size={24} />
                </SpinnerWrapper>
            )}
        </Wrapper>
    );
};

export default Button;
