import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';

//Overmind state management
import { config, useOvermind } from '../overmind';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//Index.scss file should be above layout layout and components after Bootstrap css
import styles from './index.scss';
import Layout from "../components/Layout";

const overmind = createOvermind(config, {
    devtools: false //'localhost:3000'
});

export default function RSVPScanner() {
    return (
        <Provider value={overmind}>

        <Layout>

            Hello i am scanner page

            <a href="/">BAck to Home</a>
        </Layout>
        </Provider>

    )
}