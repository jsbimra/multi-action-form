
// import QrReader from 'react-qr-scanner';

//to execute  client side code
if (process.browser) {
    var QrReader = require('react-qr-scanner')
}

import '../scss/common.scss';

//React
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
//i18n
import { withTranslation } from '../i18n';
import { useOvermind } from '../overmind';

const QRResult = (props) => {
    const { t, i18n } = useTranslation();
    const { state, actions } = useOvermind();

    // console.log('props qrResult', props.qrResult);
    // numberSID: "IDD000000000001"
    // identityNumber: "3578202410930000"
    // stakeholderType: 1
    // name: "AGUS SETIAWAN"
    // address: "Jl. Banceuy No.39 Rt004/002 Braga, Sumur Bandung↵Bandung Jawa Barat INDONESIA 40111"
    // message: "QR Already scanned"

    const {
        numberSID,
        identityNumber,
        stakeholderType,
        name,
        address,
        message,
    } = props.qrResult;

    // console.log('i18n', i18n);
    const noDataMsgLocale = t("rsvp:noDataMsg");
    const resultInfoLocale = t('common:qrScan.resultInfo', { returnObjects: true });

    const stakeholderTypeValue = (type = 2) => {
        // console.log('stakeholderType function invoked', type);

        if (!type) return;

        let result;
        switch (type) {
            case 1:
                result = t("rsvp:personal.title");
                break;
            case 2:
                result = t("rsvp:entity.title");
                break;
            case 3:
                result = t("rsvp:proxyholder.title");
                break;
            default:
                result = 'No data'
                break;
        }

        return result;
    }

    useEffect(()=> {
        console.log('rsvp actions', actions)
        // actions.rsvp.updateQRScannedState(false);
    });

    return (
        <div className="table-responsive">
            <h6 className="text-success pt-3 pb-3 lsp2">{message ? message : noDataMsgLocale}</h6>
            <h5 className="mt-1">{t('common:qrScan.resultTitle')}</h5>
            <table className="table table-striped mt-3">
                <tbody>
                    <tr>
                        <th width="50%">{resultInfoLocale.stakeholderType}:</th>
                        <td>{stakeholderType ? stakeholderTypeValue(stakeholderType) : noDataMsgLocale}</td>
                    </tr>
                    <tr>
                        <th>{resultInfoLocale.numberSID}:</th>
                        <td>{numberSID ? numberSID : noDataMsgLocale}</td>
                    </tr>
                    <tr>
                        <th>{resultInfoLocale.identityNumber}:</th>
                        <td>{identityNumber ? identityNumber : noDataMsgLocale}</td>
                    </tr>
                    <tr>
                        <th>{resultInfoLocale.name}:</th>
                        <td>{name ? name : noDataMsgLocale}</td>
                    </tr>
                    <tr>
                        <th>{resultInfoLocale.address}:</th>
                        <td>{address ? address : noDataMsgLocale}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default withTranslation(['common', 'rsvp'])(QRResult);
