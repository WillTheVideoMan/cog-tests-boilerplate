import Gate from '../../../../auth/fauna-gate';
import client from '../../../../db/fauna-client';
import { initSentry, withSentry } from '../../../../utils/sentry';

initSentry();

export default withSentry(async (req, res) => {
    throw new Error('An Error that Sentry will record.');
});
