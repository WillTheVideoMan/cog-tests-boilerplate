import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS, SHADOWS } from '../../constants';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: ${14 / 16}rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 8px 16px;
    color: var(--input-color);
`;

const Input = styled.input`
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    border: 2px solid var(--input-color);
    font-size: ${16 / 16}rem;
    color: var(--input-color);
    cursor: var(--input-cursor);

    &:hover {
        box-shadow: var(--input-box-shadow--hover);
    }

    &::placeholder {
        color: var(--input-placeholder-color);
    }
`;

const VARIANTS = {
    default: {
        '--input-color': COLORS.grey[200],
        '--input-placeholder-color': COLORS.grey[600],
        '--input-box-shadow--hover': SHADOWS.small
    },
    ghost: {
        '--input-color': COLORS.grey[600],
        '--input-placeholder-color': COLORS.grey[600],
        '--input-box-shadow--hover': null
    }
};

const ACTIVE_STATES = {
    active: { '--input-cursor': 'pointer' },
    inactive: { '--input-cursor': 'not-allowed' }
};

const TextInput = ({ value, label, placeholder, variant, active, handleInput, ...delegated }) => {
    const variantStyles = VARIANTS[variant];
    if (!variantStyles) throw new Error(`No input variant found for variant: ${variant}`);

    const styled = { ...variantStyles, ...ACTIVE_STATES[active ? 'active' : 'inactive'] };

    return (
        <Wrapper style={styled} {...delegated}>
            <Label for={label}>{label}</Label>
            <Input
                type="text"
                id={label}
                placeholder={placeholder}
                value={value}
                onInput={handleInput}
                disabled={!active}
            />
        </Wrapper>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    active: PropTypes.bool,
    handleInput: PropTypes.func
};

export default TextInput;
