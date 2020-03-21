import PropTypes from 'prop-types';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';

//Overmind state management
import { config, useOvermind } from '../overmind';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//Index.scss file should be above layout layout and components after Bootstrap css
import styles from './index.scss';
import Layout from "../components/Layout";
import QRScanner from '../components/QRScanner';
import { withTranslation } from 'react-i18next';

const overmind = createOvermind(config, {
    devtools: false //'localhost:3000'
});


function QRScan({t}) {

    return (
        <Provider value={overmind}>
            <Layout>
                <QRScanner />
            </Layout>
        </Provider>

    )
}

export default withTranslation(['common', 'rsvp'])(QRScan);
QRScan.getInitialProps = async () => ({
    namespacesRequired: ['common', 'rsvp'],
})

QRScan.propTypes = {
    t: PropTypes.func.isRequired,
}