import axios from 'axios';
import { API_BASE_URL, API_SERVICES, API_BASE_URL_2 } from '../../util/constants';
// require('dotenv').config();

const BASE_URL = process.env.IS_PRODUCTION ? 'http://153.92.5.209:3001' : 'http://153.92.5.209:3001';

// const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

const axiosInstance = axios.create();
// axiosInstance.defaults.timeout = 3000; //causing not to post form data
axiosInstance.defaults.baseURL = BASE_URL;
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
        return this.request.post(`${this.baseUrl}${API_SERVICES.VALIDATE_SID_KTP}`, payload).then(function (response) {
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
        return this.request.post(`${this.baseUrl}${API_SERVICES.RSVP_REGISTRATION}`, payload, {
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
        return this.request.post(`${API_BASE_URL_2}${API_SERVICES.CAPTCHA_VERIFICATION}`, payload, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
    }

    qrScanRequest = payload => {
        console.log('qrScanREquest payload received ', payload);
        return this.request.post(`${API_BASE_URL}${API_SERVICES.QR_SCAN}`, payload, {
            //for headers settings
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
    }

}

export const api = new Api(API_BASE_URL, axiosInstance);