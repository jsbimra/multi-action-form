
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';

import PropTypes from 'prop-types';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';

//Overmind state management
import { config, useOvermind } from '../overmind';

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