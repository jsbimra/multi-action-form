
// import QrReader from 'react-qr-scanner';

//to execute  client side code
if (process.browser) {
    var QrReader = require('react-qr-scanner')
}

import './common.scss';

//React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//i18n
import { withTranslation } from '../i18n'
import { useTranslation } from 'react-i18next';
import { useOvermind } from '../overmind';
import Message from './Message';
import QRResult from './QRResult';


function QRScanner(props) {

    const { t } = useTranslation();

    const { state, actions } = useOvermind();
    const { delay, setDelay } = useState(100);

    const scanningInfo = t("common:qrScan.scanningInfo");

    const handleScan = value => {
        // console.log('QRscanned value', value, 'state.rsvp.qrScan.scanned', state.rsvp.qrScan.scanned);

        if (value && value !== '') {
            //Form payload and make request
            const payload = new URLSearchParams();
            payload.append("qrScan", value);

            if (!state.rsvp.qrScan.scanned) {
                actions.rsvp.resetQRResultState();
                actions.rsvp.updateQRScanResult(payload);
            }
        }
    }

    const handleError = err => {
        console.error(err)
    }

    const handleReScanQR = (e) => {
        // console.log('handleReScanQR fired');
        actions.rsvp.updateQRScannedState(false);
        actions.rsvp.resetQRResultState();
        actions.rsvp.updateAPIResponeErrorState({ errors: {} });
    }

    const previewStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
        width: '100%',
        margin: "10px auto 30px",
        objectFit: 'cover',
        border: '2px outset black',
    }

    const reScanStyle = {
        marginBottom: '30px',
    };

    // console.log('QrReader ', QrReader);

    // const resultMsg = t('common:qrScan.resultMsg', { returnObjects: true });
    // const heading = t('common:qrScan.heading', { returnObjects: true });
    // console.log('resultMsgCheck', resultMsg, heading);


    return (
        <div className="text-center comp-qr-scanner">
            {(<h3>{t('common:qrScan.heading')}</h3>)}

            {!state.rsvp.qrScan.scanned ?
                QrReader !== undefined ? (<QrReader
                    delay={delay}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                    facingMode="rear"></QrReader>) : (<div className="text-info" style={previewStyle}>Loading...</div>) :
                !state.isFetching ?
                    (<div className="re-scan-container" style={reScanStyle}>
                        <button className="button button-action mt-3 mt-3" onClick={(e) => handleReScanQR()}>Re Scan</button>
                    </div>)
                    :
                    (<div className="text-warning text-center" style={previewStyle}>Loading...</div>)}

            {/* OLD LINE OF CODE  */}
            {/* {state.rsvp.qrScan.result !== null ? (<QRResult qrResult={state.rsvp.qrScan.result} />) : (<p>{t('common:qrScan.resultMsg')}</p>)} */}
            {!state.isFetching && state.rsvp.qrScan.result !== null ? (<QRResult qrResult={state.rsvp.qrScan.result} />) : null}

            {state.isFetching ? (<Message type="info" data={scanningInfo} />) : state.rsvp.errors && state.rsvp.errors.message ? (<Message type="error" data={state.rsvp.errors.message} />) : null}

            {/* <pre style={{color: '#fff'}}>
                {'state.rsvp.errors' + JSON.stringify(state.rsvp.errors, null, 2)}
            </pre> */}

        </div>
    );

};

export default withTranslation(['common', 'rsvp'])(QRScanner);
