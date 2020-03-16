import * as axios from 'axios';
// require('dotenv').config();

const BASE_URL = process.env.IS_PRODUCTION ? '/api' : 'http://localhost:3000/api';


export class Api {
    private baseUrl
    private request

    constructor(baseUrl, request) {
        this.baseUrl = baseUrl
        this.request = request
    }

    getSIDKTPVerifiedStatus = () => {
        return this.request.get(`${this.baseUrl}/randomQuote`)
    }

}

export const api = new Api(BASE_URL, axios);