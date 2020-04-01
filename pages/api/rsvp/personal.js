import axios from 'axios';
import { API_ROOT } from '../../../api.config';
import { API_SERVICES } from '../../../util/constants';

export default (req, res) => {

    if (req.method === 'POST') {
        // Process a POST request
        console.log('Body response ', req.body);

        const promiseReq = axios.post(`${API_ROOT}${API_SERVICES.VALIDATE_SID_KTP}`, req.body)

        promiseReq.then(resp => {
            console.log('response data ', resp.data);
            res.status(200).json(resp.data);
        })

    } else {
        // Handle any other HTTP method
        res.status(200).json("data for get");
    }

};