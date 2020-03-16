import { Suspense } from 'react';
import * as React from 'react';

//Overmind state management
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config, useOvermind } from '../overmind';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//Index.scss file should be above layout layout and components after Bootstrap css
import styles from './index.scss';
//i18n

// import '../i18n';

//Custom Layout Components
import Layout from '../components/Layout';

const overmind = createOvermind(config, {
    devtools: false //'localhost:3000'
});

export default function Index() {
    return (
            <Provider value={overmind}>
                <Layout className="">
                </Layout>
            </Provider>
    )
}