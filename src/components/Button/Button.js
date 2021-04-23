import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS, SHADOWS } from '../../constants';
import Spinner from '../Spinner';

const Wrapper = styled.button`
    position: relative;
    display: var(--button-display);
    width: var(--button-width);

    margin: 0;
    padding: 8px ${16 + 2}px;
    border: none;
    border-radius: 8px;

    color: var(--button-color);

    cursor: var(--button-cursor);

    background-color: var(--button-background-color);

    &:hover {
        background-color: var(--button-background-color--hover);
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
        '--button-color': COLORS.white,
        '--button-background-color': COLORS.primary.lighter,
        '--button-background-color--hover': COLORS.primary.darker
    },
    danger: {
        '--button-color': COLORS.white,
        '--button-background-color': COLORS.bad.lighter,
        '--button-background-color--hover': COLORS.bad.darker
    },
    confirm: {
        '--button-color': COLORS.grey[200],
        '--button-background-color': COLORS.good.lighter,
        '--button-background-color--hover': COLORS.good.darker
    },
    ghost: {
        '--button-color': COLORS.grey[200],
        '--button-background-color': COLORS.grey[800],
        '--button-background-color--hover': COLORS.grey[800]
    }
};

const LOADING_STATES = {
    loading: {
        '--children-opacity': 0,
        '--button-cursor': 'wait'
    },
    ready: {
        '--children-opacity': 1,
        '--button-cursor': 'pointer'
    }
};

const ACTIVE_STATES = {
    active: {},
    disabled: { '--button-cursor': 'not-allowed' }
};

const WIDTHS = {
    fullWidth: {
        '--button-display': 'block',
        '--button-width': '100%'
    },
    content: {
        '--button-display': 'inline',
        '--button-width': 'auto'
    }
};

const Button = ({ handleClick, variant, disabled, loading, fullWidth, children, ...delegated }) => {
    const variantStyles = VARIANTS[variant];
    if (!variantStyles) throw new Error(`No button variant found for variant: ${variant}`);

    const styles = {
        ...variantStyles,
        ...LOADING_STATES[loading ? 'loading' : 'ready'],
        ...ACTIVE_STATES[disabled ? 'disabled' : 'active'],
        ...WIDTHS[fullWidth ? 'fullWidth' : 'content']
    };

    return (
        <Wrapper {...delegated} style={styles} onClick={handleClick} disabled={disabled}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
            {loading && (
                <SpinnerWrapper>
                    <Spinner size={24} />
                </SpinnerWrapper>
            )}
        </Wrapper>
    );
};

Button.propTypes = {
    handleClick: PropTypes.func,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    children: PropTypes.node
};

Button.defaultProps = {
    variant: 'default'
};

export default Button;
