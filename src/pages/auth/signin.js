import { getCsrfToken, signIn } from 'next-auth/client';
import FormikTextInput from '../../components/FormikTextInput';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import SubtleError from '../../components/SubtleError';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const SignInWrapper = styled(MaxWidthWrapper)`
    max-width: 336px;
`;

const SignInTitle = styled.h1`
    font-size: 35px;
    font-family: Lora, serif;
    font-weight: 400;
    text-align: center;
`;

const signInErrors = {
    oauthsignin: 'Unable to sign in with external provider.',
    oauthcallback: 'Unable to communicate with external provider.',
    oauthcreateaccount: 'Unable to create an account with this external provider.',
    emailcreateaccount: 'Unable to create an account with this email.',
    callback: 'Unable to communicate with external provider.',
    oauthaccountnotlinked: 'Unable to link external provider with existing account.',
    emailsignin: 'Unable to sign in with email.',
    credentialssignin: 'Unable to sign in with username and password.',
    default: 'Unable to sign in.'
};
export default function SignIn({ csrfToken }) {
    const [remoteError, setRemoteError] = useState(false);
    const router = useRouter();

    return (
        <SignInWrapper>
            <SignInTitle>Sign In</SignInTitle>
            <Spacer size={24} />
            <Formik
                initialValues={{
                    email: '',
                    csrfToken: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required')
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        await signIn('email', { email: values.email, callbackUrl: '/' });
                    } catch (e) {
                        setRemoteError(true);
                        resetForm(true);
                        setSubmitting(false);
                        throw new Error('Unable to Sign In on the Client Side.');
                    }
                }}>
                {(formik) => (
                    <Form>
                        <FormikTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="joe@smith.com"
                        />
                        <Spacer size={16} />
                        <Button
                            type="submit"
                            loading={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                            fullWidth>
                            Send me a Link
                        </Button>
                        {remoteError && (
                            <SubtleError>
                                We can&apos;t sign you in at the moment. Please try again later.
                            </SubtleError>
                        )}
                        {router.query.error && (
                            <SubtleError>{signInErrors[router.query.error]}</SubtleError>
                        )}
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    </Form>
                )}
            </Formik>
        </SignInWrapper>
    );
}

SignIn.propTypes = {
    csrfToken: PropTypes.string
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: { csrfToken }
    };
}
