import styles from './layout.scss';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import useSWR from 'swr';

import { useOvermind } from '../overmind';
import RSVPForm from '../components/RSVPForm';

//translation
// import { useTranslation } from 'react-i18next';


// const layoutStyle = {
//     margin: 20,
//     padding: 20,
// };

function fetcher(url) {
    return fetch(url).then(r => r.json())
}

export default function Layout(props) {
    // const {t, i18n } = useTranslation();
    const { query } = useRouter();

    const { data, error } = useSWR(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher);

    const author = data?.author;
    let quote = data?.quote;

    if (!data) quote = "Loading...";
    if (error) quote = "Failed to fetch quotes";

    const { state, actions } = useOvermind();
    // console.log('state overmind', state);
    
    return (
        <div>
            {/* <Header title={t("title")} /> */}
            <Header />
            <div className="container pt-4 pb-4">
                <div className="mb-5">
                    <div className={styles.quote}>{quote}</div>
                    {author && <span className={styles.author}>- {author}</span>}

                    <Link href="/rsvp-scanner">
                        <a>Goto RSVP Scanner</a>
                    </Link>
                </div>

                <RSVPForm></RSVPForm>

                <style jsx>{`
                    
                `}</style>


                {props.children}
            </div>
            <Footer />
        </div>
    );

}

;