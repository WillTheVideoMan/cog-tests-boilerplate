import styled from 'styled-components';
import { signIn, signOut, useSession } from 'next-auth/client';
import Button from '../Button';

const Title = styled.h1`
    color: red;
    font-size: ${24 / 16}rem;
    text-align: center;
`;

const Area = styled.div`
    position: relative;
    padding: 16px;
    border: 2px dashed black;
    border-radius: 16px;
`;

const Label = styled.p`
    position: absolute;
    top: -12px;
    background: white;
    padding-left: 8px;
    margin-left: -4px;
    padding-right: 8px;
    font-weight: bold;
`;

const Wrapper = styled.div`
    max-width: 500px;
    margin: auto;
    display: grid;
    gap: 16px;
`;

/**
 * Ayo this do be an app.
 */
const App = () => {
    const [session, loading] = useSession();
    return (
        <Wrapper>
            <Title>Cognitive Tests Boilerplate</Title>
            <Area>
                <Label>Authentication</Label>
                {!session && !loading && (
                    <ul>
                        <li>Not signed in</li>
                        <li>
                            <Button onClick={() => signIn()} variant={'default'} fullWidth={true}>
                                Sign In
                            </Button>
                        </li>
                    </ul>
                )}
                {session && (
                    <ul>
                        <li>Signed in as {session.user.id}</li>
                        <li>Roles: {session.user.roles}</li>
                        <li>
                            <a href="/api/admin/gate-example">Visit here</a> to see if you are a
                            super secret admin.
                        </li>
                        <li>
                            <Button onClick={() => signOut()} variant={'default'} fullWidth={true}>
                                Sign Out
                            </Button>
                        </li>
                    </ul>
                )}

                {loading && (
                    <ul>
                        <li>Loading...</li>
                    </ul>
                )}
            </Area>
            <Area>
                <Label>Sentry</Label>
                <ul>
                    <li>
                        <a href="/api/admin/sentry-example">Visit Here</a> to send an API request
                        test error to Sentry.
                    </li>
                    <li>Click to trigger a client-side error:</li>
                    <li>
                        <Button
                            onClick={() => {
                                throw new Error('A Client-side Error that Sentry will see.');
                            }}
                            variant={'danger'}
                            fullWidth={true}>
                            Trigger
                        </Button>
                    </li>
                </ul>
            </Area>
            <Area>
                <Label>Storybook</Label>
                <a href="https://willthevideoman.github.io/cog-tests-boilerplate/">Visit Here</a> to
                see the Storybook Docs.
            </Area>
            <Area>
                <Label>Deployment Pipeline</Label>
                <ul>
                    <li>Linting from ESLint</li>
                    <li>Formatting from Prettier</li>
                    <li>Testing from Jest</li>
                    <li> Hosting from Vercel</li>
                    <li>Data from FaunaDB</li>
                </ul>
            </Area>
        </Wrapper>
    );
};

export default App;
