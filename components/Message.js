import React from 'react';

const Message = (props) => {
    if (props.type && props.type === 'info') {
        return (<div className="text-center text-info">{props.data}</div>);
    }
    if (props.type && props.type === 'error') {
        return (<div className="text-center text-danger">{props.data}</div>);
    }
}

export default Message;