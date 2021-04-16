# Cognitive Tests Boilerplate

A boilerplate framework for the cognitive testing platform

[Visit Demo](https://cog-tests-boilerplate.vercel.app/)

### Frameworks

-   `nextjs` react framework
-   `next-auth` authentication
-   `sentry` monitoring
-   `storybook` component development
-   `faunadb` data API
-   `vercel` edge hosting
-   `eslint` linting
-   `prettier` formatting
-   `jest` testing with `storyshots`

## Env

### `faunadb`

| Name                 | Default      |
| -------------------- | ------------ |
| `FAUNADB_URL`        | db.fauna.com |
| `FAUNADB_PORT`       |              |
| `FAUNADB_SCHEME`     | https        |
| `FAUNADB_SECRET_KEY` |              |

### `next-auth`

| Name                               | Default |
| ---------------------------------- | ------- |
| `NEXTAUTH_URL`                     |         |
| `NEXTAUTH_SECRET`                  |         |
| `NEXTAUTH_JWT_SIGNING_PRIVATE_KEY` |         |
| `GITHUB_ID`                        |         |
| `GITHUB_SECRET`                    |         |
| `EMAIL_FROM`                       |         |
| `EMAIL_SERVER_PORT`                | 587     |
| `EMAIL_SERVER_HOST`                |         |
| `EMAIL_SERVER_USER`                |         |
| `EMAIL_SERVER_PASSWORD`            |         |

### `sentry`

| Name                                 | Default      |
| ------------------------------------ | ------------ |
| `SENTRY_ORG`                         |              |
| `SENTRY_PROJECT`                     |              |
| `SENTRY_AUTH_TOKEN`                  |              |
| `VERCEL_GIT_COMMIT_SHA`              |              |
| `NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR` | `/var/task/` |
| `NEXT_PUBLIC_SENTRY_DSN`             |              |
