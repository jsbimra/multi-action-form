import React from 'react';

const Message = (props) => {
    if (props.type && props.type === 'info') {
        return (<div className="text-center text-info pt-3 pb-3 lsp2">{props.data}</div>);
    }
    if (props.type && props.type === 'error') {
        return (<div className="text-center text-danger pt-3 pb-3 lsp2">{props.data}</div>);
    }
    if (props.type && props.type === 'success') {
        return (<div className="text-center text-success pt-3 pb-3 lsp2">{props.data}</div>);
    }
    
}

export default Message;