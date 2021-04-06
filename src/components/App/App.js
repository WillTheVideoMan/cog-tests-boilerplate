import styled from 'styled-components';
import { signIn, signOut, useSession } from 'next-auth/client';

/**
 * Ayo this do be an app.
 */
const App = () => {
    const [session, loading] = useSession();
    return (
        <>
            <Title>This really do be the whole thing tho ngl bro.</Title>
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
                    <a href="/api/admin/gate-example">Click here</a> to see if you are a super
                    secret dude admin.
                    <br />
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
            )}
            {loading && <>Loading...</>}
        </>
    );
};

const Title = styled.h1`
    color: red;
`;

export default App;
