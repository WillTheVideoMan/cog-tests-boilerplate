import PropTypes from 'prop-types';
import GlobalStyle from '../components/GlobalStyle';
import { Provider } from 'next-auth/client';

const App = ({ Component, pageProps }) => (
    <Provider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} />
    </Provider>
);

App.propTypes = {
    pageProps: PropTypes.shape({
        session: PropTypes.shape({})
    }),
    Component: PropTypes.elementType
};

export default App;
