import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from '../../../lib/nextauth-fauna';
import faunadb from 'faunadb';

const faunaClient = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET_KEY,
    domain: process.env.FAUNADB_URL,
    scheme: process.env.FAUNADB_SCHEME,
    port: 8443
});

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'user:email'
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        })
    ],
    adapter: Adapters.Adapter({ faunaClient }),
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    secret: process.env.NEXTAUTH_SECRET
});
