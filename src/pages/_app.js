import PropTypes from 'prop-types';
import GlobalStyle from '../components/GlobalStyle';

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
);

App.propTypes = {
    pageProps: PropTypes.shape({}),
    Component: PropTypes.elementType
};

export default App;
