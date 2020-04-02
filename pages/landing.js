// import '../scss/index.scss';

//React
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

//for Ajax
import useSWR from 'swr';
import { WELCOME_SCREEN_TIMEOUT } from './../util/constants';
//i18n
import { i18n, withTranslation } from '../i18n'
import { useTranslation } from 'react-i18next';

//Components
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import RSVPForm from '../components/RSVPForm';

//over mind
import { useOvermind } from '../overmind';

function LandingPage({ t }) {

    const [welcome, setWelcome] = useState(true);

    const { state, actions } = useOvermind();

    //effect for welcome state
    useEffect(() => {
        const st = setTimeout(() => {
            setWelcome(false);
        }, WELCOME_SCREEN_TIMEOUT);

        return () => {
            clearTimeout(st);
        }
    });
    return (
        <>
            {welcome ? (<Welcome />) : (<RSVPForm title={t("title")}></RSVPForm>)}
        </>
    )
};

LandingPage.getInitialProps = async () => ({
    namespacesRequired: ['common', 'rsvp'],
})

LandingPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation(['common', 'rsvp'],{useSuspense: true})(LandingPage);
