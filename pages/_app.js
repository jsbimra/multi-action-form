import React from 'react'
import App from 'next/app';
import Head from 'next/head';

import { appWithTranslation } from '../i18n'
class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/static/site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        )
    }
}

MyApp.getInitialProps = async (appContext) => {
    const pageProps = await App.getInitialProps(appContext)
    return { ...pageProps }
}

export default appWithTranslation(MyApp)
