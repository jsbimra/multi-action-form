import './header.scss';

// import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation, Router } from '../i18n';
import { useTranslation } from 'react-i18next';


const linkStyle = {
    marginRight: 15
};

const Header = ({handleLanguageChange, t}) => {
    // const { t} = useTranslation();
    // console.log('Header.js ', t("lang"));

    const changeLanguage = lng => {
        // console.log("Change Language triggered!", props);
        handleLanguageChange(lng);
    }

    const refreshPage = (e) => {
        e.preventDefault();
        Router.push('/');
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }

    return (
        <header>
            <div className="container">
                {/* <h1>{props.title}</h1> */}
                <nav>
                    <a href="/" style={{cursor: 'pointer'}} onClick={(e) => refreshPage(e)}><h6 className="d-inline"><a href="/">Multi Doable Form</a></h6></a>
                    <ul className="nav float-right d-none">
                        {/* <li className="nav-item">
                            <Link href="/">
                                <a style={linkStyle}>Home</a>
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/qrscan">
                                <a style={linkStyle}>RSVP Scanner</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="nav float-right language-nav">
                        {i18n.language === 'id' ? (<button onClick={() => changeLanguage('en')}>{t("lang")}</button>) : (<button onClick={() => changeLanguage('id')}>{t("lang")}</button>)}
                    </div>
                </nav>
            </div>
        </header>
    )
};

// Header.getInitialProps = async ({ req }) => {
//     console.log(req.language, i18n.language)
//     const currentLanguage = req ? req.language : i18n.language
// }

Header.propTypes = {
    t: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    
  }

export default withTranslation(['common', 'rsvp'],{useSuspense: true})(Header);
