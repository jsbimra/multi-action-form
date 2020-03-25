//Css import
import styles from './layout.scss';

//React
import React from 'react';
import PropTypes from 'prop-types';

//i18n
import { i18n, withTranslation } from '../i18n'
import { useTranslation } from 'react-i18next';

//Custom components
import Header from './Header';
import Footer from './Footer';

//Custom styles example
// const layoutStyle = {
//     margin: 20,
//     padding: 20,
// };

function fetcher(url) {
    return fetch(url).then(r => r.json())
}

const changeLanguage = (lng = 'id') => {
    // console.log('changing to', lng);
    i18n.changeLanguage(lng);
}

function Layout(props) {

    return (
        <div>
            <Header handleLanguageChange={changeLanguage} />

            <div className="container mt-4 mb-4 pt-4 layout-container">
                {/* 
                    To show quote example
                    <div className="mb-5">
                    <div className={styles.quote}>{quote}</div>
                    {author && <span className={styles.author}>- {author}</span>}

                    <Link href="/rsvp-scanner">
                        <a>Goto RSVP Scanner</a>
                    </Link>
                </div> */}


                <style jsx>{`
                    
                `}</style>

                {props.children}
            </div>
            <Footer />
        </div>
    );

};

export default withTranslation(['common', 'rsvp'])(Layout);

// Layout.getInitialProps = async () => ({
//     namespacesRequired: ['common', 'rsvp'],
// })

// Layout.propTypes = {
//     t: PropTypes.func.isRequired,
// }