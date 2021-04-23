import { getCsrfToken, signIn } from 'next-auth/client';
import TextInput from '../../components/TextInput';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function SignIn({ csrfToken }) {
    const result = signIn('email', { email: 'dude' });
    console.log(result);
    return (
        <Formik
            initialValues={{
                email: '',
                csrfToken: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                csrfToken: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
            }}>
            {(formik) => (
                <Form method="post" action="/api/auth/signin/email">
                    <TextInput
                        label="Email Address"
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
                        Sign in with Email
                    </Button>
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                </Form>
            )}
        </Formik>
    );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: { csrfToken }
    };
}
