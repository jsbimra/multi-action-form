import axios from 'axios';
import { API_SERVICES } from '../../util/constants';

import { API_ROOT } from '../../api.config';

// require('dotenv').config();

// const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

const axiosInstance = axios.create();
// axiosInstance.defaults.timeout = 3000; //causing not to post form data
axiosInstance.defaults.baseURL = API_ROOT;
axiosInstance.defaults.headers = {
    'Content-Type': 'application/json',
};

export class Api {
    private baseUrl;
    private request;

    constructor(baseUrl, request) {
        this.baseUrl = baseUrl;
        this.request = request;
    }

    // getRandomQuotes = () => {
    //     return this.request.get(`/randomQuote`)
    // }

    getSIDKTPVerifiedStatus = (payload) => {
        // return this.request.post(`${API_SERVICES.VALIDATE_SID_KTP}`, payload)
        // return fetch(`${API_SERVICES.VALIDATE_SID_KTP}`, {
        //     method: 'post',
        //     body: payload
        // })

        // console.log('Effects getSIDKTPVerifiedStatus post data received', payload);
        const url = this.baseUrl ? `${this.baseUrl}${API_SERVICES.VALIDATE_SID_KTP}` : `${API_SERVICES.VALIDATE_SID_KTP}`;

        return this.request.post(url, payload).then(function (response) {
            return response;
        })
            .catch(error => {
                console.log('Connectin Error: ', error, error.response); // Network Error
                // console.log('Connectin Error status: ', error.status); // undefined
                // console.log('Connectin Error code: ', error.code); // undefined
            });

        // return this.request.post(`${this.baseUrl}/rsvp/personal`, payload)

        // return this.request({
        //     method: 'POST',
        //     url: `${this.baseUrl}/rsvp/personal`, 
        //     data: payload
        // })

    }

    submitForm = (payload) => {
        // console.log('Effects submit post data received', payload);
        const url = this.baseUrl ? `${this.baseUrl}${API_SERVICES.RSVP_REGISTRATION}` : `${API_SERVICES.RSVP_REGISTRATION}`;

        return this.request.post(url, payload, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .catch(error => {
                console.log('Connectin Error: ', error, error.response); // Network Error
                // console.log('Connectin Error status: ', error.status); // undefined
                // console.log('Connectin Error code: ', error.code); // undefined
            });

        // return fetch(`${this.baseUrl}${API_SERVICES.RSVP_REGISTRATION}`, {
        //     method: 'POST',
        //     headers: {
        //         "content-type": "multipart/form-data"
        //     },
        //     body: payload
        // })
    }

    verifyCaptchaRequest = (payload) => {
        return this.request.post(`${this.baseURL}${API_SERVICES.CAPTCHA_VERIFICATION}`, payload, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
    }

    qrScanRequest = payload => {
        // console.log('qrScanREquest payload received ', payload, this.baseURL, API_SERVICES.QR_SCAN);
        const url = this.baseUrl ? `${this.baseUrl}${API_SERVICES.QR_SCAN}` : `${API_SERVICES.QR_SCAN}`;

        return this.request.post(url, payload, {
            //for headers settings
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
    }

}

export const api = new Api(API_ROOT, axiosInstance);