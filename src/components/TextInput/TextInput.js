import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS, SHADOWS } from '../../constants';
import { useField } from 'formik';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormLabel = styled.label`
    font-size: ${14 / 16}rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px ${16 + 2}px;
    color: var(--input-color);
`;

const FormError = styled.div`
    font-size: ${14 / 16}rem;
    font-weight: 700;
    padding: 10px ${16 + 2}px;
    color: var(--input-color--error);
`;

const Input = styled.input`
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    border: 2px solid var(--input-color);
    font-size: ${16 / 16}rem;
    color: var(--input-color);
    cursor: var(--input-cursor);

    &::placeholder {
        color: var(--input-placeholder-color);
    }
`;

const VARIANTS = {
    default: {
        '--input-color': COLORS.grey[200],
        '--input-placeholder-color': COLORS.grey[600],
        '--input-color--error': COLORS.bad.default
    },
    ghost: {
        '--input-color': COLORS.grey[600],
        '--input-placeholder-color': COLORS.grey[600],
        '--input-color--error': COLORS.grey[600]
    }
};

const ACTIVE_STATES = {
    active: { '--input-cursor': 'pointer' },
    disabled: { '--input-cursor': 'not-allowed' }
};

const TextInput = ({ label, variant, disabled, ...props }) => {
    const variantStyles = VARIANTS[variant];
    if (!variantStyles) throw new Error(`No input variant found for variant: ${variant}`);

    const styled = { ...variantStyles, ...ACTIVE_STATES[disabled ? 'disabled' : 'inactive'] };

    const [field, meta] = useField(props);

    return (
        <Wrapper style={styled}>
            <FormLabel htmlFor={props.name}>{label}</FormLabel>
            <Input {...field} {...props} disabled={disabled} />
            {meta.touched && meta.error && <FormError>{meta.error}</FormError>}
        </Wrapper>
    );
};

TextInput.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

TextInput.defaultProps = {
    variant: 'default'
};

export default TextInput;
