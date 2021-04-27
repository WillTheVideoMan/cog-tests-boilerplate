import Spacer from '../../components/Spacer';

import MaxWidthWrapper from '../../components/MaxWidthWrapper';

import styled from 'styled-components';

import Link from 'next/link';

const VerifyWrapper = styled(MaxWidthWrapper)`
    max-width: 336px;
    text-align: center;
`;

const VerifyTitle = styled.h1`
    font-size: 35px;
    font-family: Lora, serif;
    font-weight: 400;
    text-align: center;
`;

export default function SignIn() {
    return (
        <VerifyWrapper>
            <VerifyTitle>Sent!</VerifyTitle>
            <Spacer size={24} />
            <p>
                We’ve sent a sign-in link to your inbox. If it hasn’t arrived in the next few
                seconds, check your spam folder or <Link href="/auth/signin">try again</Link>.
            </p>
        </VerifyWrapper>
    );
}
