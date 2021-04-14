import styled from 'styled-components';
import { signIn, signOut, useSession } from 'next-auth/client';

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
    padding-right: 8px;
`;

const Wrapper = styled.div`
    max-width: 500px;
    margin: auto;
    display: grid;
    gap: 16px;
`;

const ErrorTrigger = styled.button`
    background-color: red;
    color: white;
    margin-left: 8px;
`;

/**
 * Ayo this do be an app.
 */
const App = () => {
    const [session, loading] = useSession();
    return (
        <Wrapper>
            <Title>Cognitive Tests Boilerplate Functions</Title>
            <Area>
                <Label>Sentry</Label>
                <a href="/api/admin/sentry-example">Visit Here</a> to send an API request test error
                to Sentry.
                <br />
                Click to trigger a client-side error:
                <ErrorTrigger
                    onClick={() => {
                        throw new Error('A Client-side Error that Sentry will see.');
                    }}>
                    Trigger
                </ErrorTrigger>
            </Area>
            <Area>
                <Label>Authentication</Label>
                {!session && !loading && (
                    <>
                        Not signed in
                        <br />
                        <button onClick={() => signIn()}>Sign In</button>
                    </>
                )}
                {session && (
                    <>
                        Signed in as {session.user.id}
                        <br />
                        Roles: {session.user.roles}
                        <br />
                        <a href="/api/admin/gate-example">Visit here</a> to see if you are a super
                        secret dude admin.
                        <br />
                        <button onClick={() => signOut()}>Sign Out</button>
                    </>
                )}

                {loading && <>Loading...</>}
            </Area>
        </Wrapper>
    );
};

export default App;
