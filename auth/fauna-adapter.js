/**
 * Copy-pasted from https://github.com/nextauthjs/adapters/tree/canary/packages/fauna
 */

import { query as q } from 'faunadb';
import { createHash, randomBytes } from 'crypto';

const Adapter = (config) => {
    const {
        faunaClient,
        collections = {
            User: 'users',
            Account: 'accounts',
            Session: 'sessions',
            VerificationRequest: 'verification_requests'
        },
        indexes = {
            Account: 'account_by_provider_account_id',
            User: 'user_by_email',
            Session: 'session_by_token',
            VerificationRequest: 'verification_request_by_token'
        }
    } = config;

    async function getAdapter(appOptions) {
        const { logger } = appOptions;

        const defaultSessionMaxAge = 30 * 24 * 60 * 60;
        const sessionMaxAge = (appOptions?.session?.maxAge ?? defaultSessionMaxAge) * 1000;
        const sessionUpdateAge = (appOptions?.session?.updateAge ?? 0) * 1000;

        async function createUser(profile) {
            logger.debug('create_user', profile);

            const FQL = q.Create(q.Collection(collections.User), {
                data: {
                    name: profile.name,
                    email: profile.email,
                    image: profile.image,
                    emailVerified: profile.emailVerified
                        ? q.Time(profile.emailVerified.toISOString())
                        : null,
                    username: profile.username,
                    createdAt: q.Now(),
                    updatedAt: q.Now()
                }
            });

            try {
                const { ref, data: user } = (await faunaClient.query(FQL)) || {};
                const result = {
                    ...user,
                    id: ref.id,
                    emailVerified: user?.emailVerified?.value,
                    createdAt: user?.createdAt?.value,
                    updatedAt: user?.updatedAt?.value
                };
                logger.debug('create_user_result', result);
                return result;
            } catch (error) {
                logger.error('create_user_error', error);
                return Promise.reject(new Error('create_user_error', error));
            }
        }

        async function getUser(id) {
            logger.debug('get_user', id);

            const FQL = q.Get(q.Ref(q.Collection(collections.User), id));

            try {
                const { ref, data: user } = (await faunaClient.query(FQL)) || {};
                const result = {
                    ...user,
                    id: ref.id,
                    emailVerified: user?.emailVerified?.value,
                    createdAt: user?.createdAt?.value,
                    updatedAt: user?.updatedAt?.value
                };
                logger.debug('get_user_result', result);
                return result;
            } catch (error) {
                logger.error('get_user_error', error);
                return Promise.reject(new Error('get_user_error', error));
            }
        }

        async function getUserByEmail(email) {
            logger.debug('get_user_by_email', email);

            if (!email) {
                return null;
            }

            const FQL = q.Let(
                {
                    ref: q.Match(q.Index(indexes.User), email)
                },
                q.If(q.Exists(q.Var('ref')), q.Get(q.Var('ref')), null)
            );

            try {
                const { ref, data: user } = (await faunaClient.query(FQL)) || {};

                if (user == null) {
                    return null;
                }

                const result = {
                    ...user,
                    id: ref.id,
                    emailVerified: user?.emailVerified?.value,
                    createdAt: user?.createdAt?.value,
                    updatedAt: user?.updatedAt?.value
                };
                logger.debug('get_user_by_email_result', result);
                return result;
            } catch (error) {
                logger.error('get_user_by_email_error', error);
                return Promise.reject(new Error('get_user_by_email_error', error));
            }
        }

        async function getUserByProviderAccountId(providerId, providerAccountId) {
            logger.debug('get_user_by_provider_account_id', providerId, providerAccountId);

            const FQL = q.Let(
                {
                    ref: q.Match(q.Index(indexes.Account), [providerId, providerAccountId])
                },
                q.If(
                    q.Exists(q.Var('ref')),
                    q.Get(
                        q.Ref(
                            q.Collection(collections.User),
                            q.Select(['data', 'userId'], q.Get(q.Var('ref')))
                        )
                    ),
                    null
                )
            );

            try {
                const { ref, data: user } = (await faunaClient.query(FQL)) || {};

                if (user == null) {
                    return null;
                }

                const result = {
                    ...user,
                    id: ref.id,
                    emailVerified: user?.emailVerified?.value,
                    createdAt: user?.createdAt?.value,
                    updatedAt: user?.updatedAt?.value
                };
                logger.debug('get_user_by_provider_account_id_result', result);
                return result;
            } catch (error) {
                logger.error('get_user_by_provider_account_id_error', error);
                return Promise.reject(new Error('get_user_by_provider_account_id_error', error));
            }
        }

        async function updateUser(oldUser) {
            logger.debug('update_user', oldUser);

            const FQL = q.Update(q.Ref(q.Collection(collections.User), oldUser.id), {
                data: {
                    name: oldUser.name,
                    email: oldUser.email,
                    image: oldUser.image,
                    emailVerified: oldUser.emailVerified
                        ? q.Time(oldUser.emailVerified.toISOString())
                        : null,
                    username: oldUser.username,
                    updatedAt: q.Now()
                }
            });

            try {
                const { ref, data: user } = (await faunaClient.query(FQL)) || {};
                const result = {
                    ...user,
                    id: ref.id,
                    emailVerified: user?.emailVerified?.value,
                    createdAt: user?.createdAt?.value,
                    updatedAt: user?.updatedAt?.value
                };
                logger.debug('update_user_result', result);
                return result;
            } catch (error) {
                logger.error('update_user_error', error);
                return Promise.reject(new Error('update_user_error', error));
            }
        }

        async function deleteUser(id) {
            logger.debug('delete_user', id);

            const FQL = q.Delete(q.Ref(q.Collection(collections.User), id));

            try {
                return await faunaClient.query(FQL);
            } catch (error) {
                logger.error('delete_user_error', error);
                return Promise.reject(new Error('delete_user_error', error));
            }
        }

        async function linkAccount(
            userId,
            providerId,
            providerType,
            providerAccountId,
            refreshToken,
            accessToken,
            accessTokenExpires
        ) {
            logger.debug(
                'link_account',
                userId,
                providerId,
                providerType,
                providerAccountId,
                refreshToken,
                accessToken,
                accessTokenExpires
            );

            const FQL = q.Create(q.Collection(collections.Account), {
                data: {
                    userId: userId,
                    providerId: providerId,
                    providerType: providerType,
                    providerAccountId: providerAccountId,
                    refreshToken: refreshToken,
                    accessToken: accessToken,
                    accessTokenExpires: accessTokenExpires,
                    createdAt: q.Now(),
                    updatedAt: q.Now()
                }
            });

            try {
                const { ref, data: account } = (await faunaClient.query(FQL)) || {};
                const result = {
                    ...account,
                    id: ref.id,
                    createdAt: account?.createdAt?.value,
                    updatedAt: account?.updatedAt?.value
                };
                logger.debug('link_account_result', result);
                return result;
            } catch (error) {
                logger.error('link_account_error', error);
                return Promise.reject(new Error('link_account_error', error));
            }
        }

        async function unlinkAccount(userId, providerId, providerAccountId) {
            logger.debug('unlink_account', userId, providerId, providerAccountId);

            const FQL = q.Delete(
                q.Select(
                    'ref',
                    q.Get(q.Match(q.Index(indexes.Account), [providerId, providerAccountId]))
                )
            );

            try {
                return await faunaClient.query(FQL);
            } catch (error) {
                logger.error('unlink_account_error', error);
                return Promise.reject(new Error('unlink_account_error', error));
            }
        }

        async function createSession(user) {
            logger.debug('create_session', user);

            let expires = null;
            if (sessionMaxAge) {
                const dateExpires = new Date();
                dateExpires.setTime(dateExpires.getTime() + sessionMaxAge);
                expires = dateExpires.toISOString();
            }

            const FQL = q.Create(q.Collection(collections.Session), {
                data: {
                    userId: user.id,
                    expires: q.Time(expires),
                    sessionToken: randomBytes(32).toString('hex'),
                    accessToken: randomBytes(32).toString('hex'),
                    createdAt: q.Now(),
                    updatedAt: q.Now()
                }
            });

            try {
                const { ref, data: session } = (await faunaClient.query(FQL)) || {};

                const result = {
                    ...session,
                    id: ref.id,
                    expires: session.expires.value,
                    createdAt: session.createdAt.value,
                    updatedAt: session.updatedAt.value
                };
                logger.debug('create_session_result', result);
                return result;
            } catch (error) {
                logger.error('create_session_error', error);
                return Promise.reject(new Error('create_session_error', error));
            }
        }

        async function getSession(sessionToken) {
            logger.debug('get_session', sessionToken);

            const FQL = q.Let(
                {
                    ref: q.Match(q.Index(indexes.Session), sessionToken)
                },
                q.If(q.Exists(q.Var('ref')), q.Get(q.Var('ref')), null)
            );

            try {
                const { ref, data: session } = (await faunaClient.query(FQL)) || {};

                // Check session has not expired (do not return it if it has)
                if (session?.expires?.value && Date.now() > Date.parse(session.expires.value)) {
                    await faunaClient.query(q.Delete(ref));
                    return null;
                }

                const result = {
                    ...session,
                    id: ref.id,
                    expires: session.expires.value,
                    createdAt: session.createdAt.value,
                    updatedAt: session.updatedAt.value
                };
                logger.debug('get_session_result', result);
                return result;
            } catch (error) {
                logger.error('get_session_error', error);
                return Promise.reject(new Error('get_session_error', error));
            }
        }

        async function updateSession(oldSession, force) {
            logger.debug('update_session', oldSession);

            const shouldUpdate =
                sessionMaxAge && (sessionUpdateAge || sessionUpdateAge === 0) && oldSession.expires;
            if (!shouldUpdate && !force) {
                return null;
            }

            // Calculate last updated date, to throttle write updates to database
            // Formula: ({expiry date} - sessionMaxAge) + sessionUpdateAge
            //     e.g. ({expiry date} - 30 days) + 1 hour
            //
            // Default for sessionMaxAge is 30 days.
            // Default for sessionUpdateAge is 1 hour.
            const dateSessionIsDueToBeUpdated = new Date(oldSession.expires);
            dateSessionIsDueToBeUpdated.setTime(
                dateSessionIsDueToBeUpdated.getTime() - sessionMaxAge
            );
            dateSessionIsDueToBeUpdated.setTime(
                dateSessionIsDueToBeUpdated.getTime() + sessionUpdateAge
            );

            // Trigger update of session expiry date and write to database, only
            // if the session was last updated more than {sessionUpdateAge} ago
            const currentDate = new Date();
            if (currentDate < dateSessionIsDueToBeUpdated && !force) {
                return null;
            }

            const newExpiryDate = new Date();
            newExpiryDate.setTime(newExpiryDate.getTime() + sessionMaxAge);

            const FQL = q.Update(q.Ref(q.Collection(collections.Session), oldSession.id), {
                data: {
                    expires: q.Time(newExpiryDate.toISOString()),
                    updatedAt: q.Time(new Date().toISOString())
                }
            });

            try {
                const { ref, data: session } = (await faunaClient.query(FQL)) || {};
                const result = {
                    ...session,
                    id: ref.id,
                    expires: session.expires.value,
                    createdAt: session.createdAt.value,
                    updatedAt: session.updatedAt.value
                };
                logger.debug('update_session_result', result);
                return result;
            } catch (error) {
                logger.error('update_session_error', error);
                return Promise.reject(new Error('update_session_error', error));
            }
        }

        async function deleteSession(sessionToken) {
            logger.debug('delete_session', sessionToken);

            const FQL = q.Delete(
                q.Select('ref', q.Get(q.Match(q.Index(indexes.Session), sessionToken)))
            );

            try {
                return await faunaClient.query(FQL);
            } catch (error) {
                logger.error('delete_session_error', error);
                return Promise.reject(new Error('delete_session_error', error));
            }
        }

        async function createVerificationRequest(identifier, url, token, secret, provider) {
            logger.debug('create_verification_request', identifier);

            const { baseUrl } = appOptions;
            const { sendVerificationRequest, maxAge } = provider;

            // Store hashed token (using secret as salt) so that tokens cannot be exploited
            // even if the contents of the database is compromised
            // @TODO Use bcrypt function here instead of simple salted hash
            const hashedToken = createHash('sha256').update(`${token}${secret}`).digest('hex');

            let expires = null;
            if (maxAge) {
                const dateExpires = new Date();
                dateExpires.setTime(dateExpires.getTime() + maxAge * 1000);

                expires = dateExpires.toISOString();
            }

            const FQL = q.Create(q.Collection(collections.VerificationRequest), {
                data: {
                    identifier: identifier,
                    token: hashedToken,
                    expires: expires === null ? null : q.Time(expires),
                    createdAt: q.Now(),
                    updatedAt: q.Now()
                }
            });

            try {
                const { ref, data: verificationRequest } = (await faunaClient.query(FQL)) || {};

                // With the verificationCallback on a provider, you can send an email, or queue
                // an email to be sent, or perform some other action (e.g. send a text message)
                await sendVerificationRequest({
                    identifier,
                    url,
                    token,
                    baseUrl,
                    provider
                });

                const result = {
                    ...verificationRequest,
                    id: ref.id,
                    expires: verificationRequest.expires.value,
                    createdAt: verificationRequest.createdAt.value,
                    updatedAt: verificationRequest.updatedAt.value
                };
                logger.debug('create_verification_request_result', result);
                return result;
            } catch (error) {
                logger.error('create_verification_request_error', error);
                return Promise.reject(new Error('create_verification_request_error', error));
            }
        }

        async function getVerificationRequest(identifier, token, secret) {
            logger.debug('get_verification_request', identifier, token);

            const hashedToken = createHash('sha256').update(`${token}${secret}`).digest('hex');

            const FQL = q.Let(
                {
                    ref: q.Match(q.Index(indexes.VerificationRequest), hashedToken)
                },
                q.If(q.Exists(q.Var('ref')), q.Get(q.Var('ref')), null)
            );

            try {
                const { ref, data: verificationRequest } = (await faunaClient.query(FQL)) || {};

                if (
                    verificationRequest?.expires?.value &&
                    Date.now() > Date.parse(verificationRequest.expires.value)
                ) {
                    // Delete the expired request so it cannot be used
                    await faunaClient.query(q.Delete(ref));
                    return null;
                }

                const result = {
                    ...verificationRequest,
                    id: ref.id,
                    expires: verificationRequest.expires.value,
                    createdAt: verificationRequest.createdAt.value,
                    updatedAt: verificationRequest.updatedAt.value
                };
                logger.debug('get_verification_request_result', result);
                return result;
            } catch (error) {
                logger.error('get_verification_request_error', error);
                return Promise.reject(new Error('get_verification_request_error', error));
            }
        }

        async function deleteVerificationRequest(identifier, token, secret) {
            logger.debug('delete_verification_request', identifier, token);

            const hashedToken = createHash('sha256').update(`${token}${secret}`).digest('hex');

            const FQL = q.Delete(
                q.Select('ref', q.Get(q.Match(q.Index(indexes.VerificationRequest), hashedToken)))
            );

            try {
                return await faunaClient.query(FQL);
            } catch (error) {
                logger.error('delete_verification_error', error);
                return Promise.reject(new Error('delete_verification_error', error));
            }
        }

        return Promise.resolve({
            createUser,
            getUser,
            getUserByEmail,
            getUserByProviderAccountId,
            updateUser,
            deleteUser,
            linkAccount,
            unlinkAccount,
            createSession,
            getSession,
            updateSession,
            deleteSession,
            createVerificationRequest,
            getVerificationRequest,
            deleteVerificationRequest
        });
    }

    return {
        getAdapter
    };
};

export default {
    Adapter
};
