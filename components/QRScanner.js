
// import QrReader from 'react-qr-scanner';

//to execute  client side code
if (process.browser) {
    var QrReader = require('react-qr-scanner')
}

//React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//i18n
import { i18n, withTranslation } from '../i18n'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useOvermind } from '../overmind';

export const QRSuccess = (props) => {
    return (
        <div className="alert alert-success">
            Success!!!
        </div>
    )
}
function QRScanner(props) {

    const { t } = useTranslation();
    const { delay, setDelay } = useState(100);

    // console.log(i18n.store)

    const { state, actions } = useOvermind();

    const handleScan = data => {
        console.log(data);
        if (data) {
            actions.updateQRScanResult(data);
        }
    }

    const handleError = err => {
        console.error(err)
    }

    const previewStyle = {
        height: 220,
        width: 320,
        margin: "10px auto 30px"
    }
    // console.log(i18n.store.data);

    return (
        <div className="text-center">
            {t('common:qrScan.heading') ? (<h3>{t('common:qrScan.heading')}</h3>) : null}
            {QrReader !== undefined ? (<QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
                facingMode="rear"

            ></QrReader>) : (<div className="text-info" style={previewStyle}>Loading...</div>)}

           {state.qrScan.result !== null ? (<p>{state.qrScan.result}</p>) : t('common:qrScan.resultMsg') ? (<p>{t('common:qrScan.resultMsg')}</p>) : null }
            

            {/* <Link href="/">
                <a>Back to Home</a>
            </Link> */}
        </div>
    );

};

export default withTranslation(['common','rsvp'])(QRScanner);
