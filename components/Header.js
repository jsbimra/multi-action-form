import Link from 'next/link';
import './header.scss';

const linkStyle = {
    marginRight: 15
};

const Header = (props) => (
    <header>
        <div className="container">
            <h1>{props.title}</h1>
            <nav>
                <Link href="/"><a><img src="/images/xl-axiata-logo.svg" /></a></Link>
                <ul className="nav float-right">
                    <li className="nav-item">
                        <Link href="/">
                            <a style={linkStyle}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/rsvp-scanner">
                            <a style={linkStyle}>RSVP Scanner</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;