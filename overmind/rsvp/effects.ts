import axios from 'axios';
import { API_BASE_URL, API_SERVICES } from '../../util/constants';
// require('dotenv').config();

const BASE_URL = process.env.IS_PRODUCTION ? '/api' : 'http://localhost:3000/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export class Api {
    private baseUrl;
    private request;

    constructor(baseUrl, request) {
        this.baseUrl = baseUrl;
        this.request = request;
    }

    getSIDKTPVerifiedStatus = (postData) => {
        // return this.request.post(`${API_SERVICES.VALIDATE_SID_KTP}`, postData)
        // return fetch(`${API_SERVICES.VALIDATE_SID_KTP}`, {
        //     method: 'post',
        //     body: postData
        // })

        // console.log('Effects getSIDKTPVerifiedStatus post data received', postData);
        return this.request.post(`${this.baseUrl}${API_SERVICES.VALIDATE_SID_KTP}`, postData).then(function (response) {
            return response;
        })
            .catch(function (error) {
                console.log(error); // Network Error
                console.log(error.status); // undefined
                console.log(error.code); // undefined
            });

        // return this.request.post(`${this.baseUrl}/rsvp/personal`, postData)

        // return this.request({
        //     method: 'POST',
        //     url: `${this.baseUrl}/rsvp/personal`, 
        //     data: postData
        // })

    }

    submitForm = (postData) => {
        console.log('Effects submit post data received', postData);
        return this.request.post(`${this.baseUrl}${API_SERVICES.RSVP_REGISTRATION}`, postData)
    }

    // getRandomQuotes = () => {
    //     return this.request.get(`/randomQuote`)
    // }

}

export const api = new Api(API_BASE_URL, axiosInstance);