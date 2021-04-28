import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from '../Spacer';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { COLORS, SHADOWS } from '../../constants';

const Wrapper = styled(MaxWidthWrapper)`
    max-width: 384px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

const Card = styled.div`
    box-shadow: ${SHADOWS.large};
    border-radius: 16px;
    padding: 16px;
    text-align: center;
    background-color: ${COLORS.white};
    margin-top: -48px;
`;

const Title = styled.h1`
    font-size: 35px;
    font-family: Lora, serif;
    font-weight: 400;
`;

const CenterCard = ({ title, children, ...delegated }) => {
    return (
        <Wrapper {...delegated}>
            <Card>
                <Title>{title}</Title>
                <Spacer size={8} />
                {children}
            </Card>
        </Wrapper>
    );
};

CenterCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default CenterCard;
