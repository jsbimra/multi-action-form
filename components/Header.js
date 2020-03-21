// import Link from 'next/link';
import './header.scss';

const linkStyle = {
    marginRight: 15
};
import { i18n, Link } from '../i18n';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
    const { t} = useTranslation();
    // console.log('Header.js ', t("lang"));

    const changeLanguage = lng => {
        // console.log("Change Language triggered!", props);
        props.handleLanguageChange(lng);
    }

    return (
        <header>
            <div className="container">
                {/* <h1>{props.title}</h1> */}
                <nav>
                    <Link href="/"><h6 className="d-inline"><a href="/">Multi Doable Form</a></h6></Link>
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
export default Header;
