import * as React from 'react';

import './common.scss';

export default function Loader(props) {
    const { message } = props.message ? props : { message: "Loading..." };

    return (
        <div className="loading-wrapper">
            <div className="overlay"></div>
            <div className="loading-content">{message}</div>
        </div>
    )
}