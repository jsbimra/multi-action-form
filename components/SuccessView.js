import React, { useEffect } from 'react';

import '../scss/common.scss';
import { SUCCESS_SCREEN_TIMEOUT } from './../util/constants';
import { useOvermind } from './../overmind';

export default function SuccessView(props) {

    const { state, actions } = useOvermind();

    useEffect(() => {
        const st = setTimeout(() => {
            // console.log('to hide Success timeout trigger')
            actions.rsvp.updateSubmitSuccess(false);
        }, SUCCESS_SCREEN_TIMEOUT);

        return () => {
            clearTimeout(st);
        }
    });

    return (
        <div className="text-center comp-success-view">
            {/* <h1>Thank you</h1>
            <p className="cleafix">You have successfully registered.</p> */}
            
            <h1>{props.success && props.success.title}</h1>
            <p>{props.success && props.success.message}</p>
        </div>
    )
}