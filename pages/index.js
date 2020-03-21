// import { Suspense } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';

//Overmind state management
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from '../overmind';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//Index.scss file should be above layout layout and components after Bootstrap css
import styles from './index.scss';

//Custom Layout Components
import LandingPage from './landing';
import { withTranslation } from 'react-i18next';

const overmind = createOvermind(config, {
    devtools: false //'localhost:3000'
});

function Index() {
    return (
        <Provider value={overmind}>
            <LandingPage />
        </Provider>
    )
}

export default Index;
// export default withTranslation(['common','rsvp'])(Index);

// Index.getInitialProps = async () => ({
//     namespacesRequired: ['common', 'rsvp'],
// })

// Index.propTypes = {
//     t: PropTypes.func.isRequired,
// }