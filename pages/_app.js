
//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//Index.scss file should be above layout layout and components after Bootstrap css
import '../scss/index.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { appWithTranslation } from '../i18n';
import Layout from '../components/Layout';
import Loader from 'react-loader-spinner';

// import Router from 'next/router';
// Router.events.on('routeChangeStart', url => {
//     console.log(`Loading: ${url}`)
// })
// Router.events.on('routeChangeComplete', () => {
//     console.log(`Done: `)

// })
// Router.events.on('routeChangeError', () => {
//     console.log(`Error: `)
// });

class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    componentDidMount() {
        // console.log('component did mount');
        // setTimeout(() => this.setState({ loading: false }), 500) //for testing
        this.setState({ loading: false });
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/static/site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />

                    {/* for no indexing in search result */}
                    <meta name="robots" content="noindex,follow" />

                </Head>

                <div className="loader-container" style={!this.state.loading ? { display: 'none' } : { display: 'flex' }}>
                    <div style={{ margin: 'auto', maxHeight: '100%' }}>
                        <Loader
                            type="CradleLoader"
                            color="#E7437D"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                    </div>

                    <style jsx>{`
                        .loader-container {
                            position: fixed;
                            transition: all .5s ease-out;
                            background: #fff;
                            top: 0px; left: 0px; bottom: 0px; right: 0px; display: flex; align-items: center; overflow: auto;
                        }

                    `}</style>
                </div>

                <div style={this.state.loading ? { visibility: 'hidden' } : { visibility: 'visible' }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </div>
            </>
        )


    }
}

MyApp.getInitialProps = async (appContext) => {
    const pageProps = await App.getInitialProps(appContext)
    return { ...pageProps }
}


export default appWithTranslation(MyApp)
