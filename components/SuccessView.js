import * as React from 'react';

import './common.scss';

export default function SuccessView(props) {

    return (
        <div className="text-center comp-success-view">
            {/* <h1>Thank you</h1>
            <p className="cleafix">You have successfully registered.</p> */}
            
            <h1>{props.success && props.success.title}</h1>
            <p>{props.success && props.success.message}</p>
        </div>
    )
}