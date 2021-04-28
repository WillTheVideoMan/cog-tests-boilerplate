import Link from 'next/link';
import CenterCard from '../../components/CenterCard';
import Wave from '../../components/Wave';
import { COLORS } from '../../constants';

export default function SignIn() {
    return (
        <>
            <div style={{ position: 'fixed', width: '100%', top: '15%' }}>
                <Wave />
                <div
                    style={{
                        background: COLORS.primary.transparent,
                        height: '100vh',
                        marginTop: '-1px;'
                    }}></div>
            </div>
            <CenterCard title="Sent!">
                <p>
                    We’ve sent a sign-in link to your inbox. If it hasn’t arrived in the next few
                    seconds, check your spam folder or <Link href="/auth/signin">try again</Link>.
                </p>
            </CenterCard>
        </>
    );
}
