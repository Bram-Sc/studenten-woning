import React from 'react';
import "./App.css";

function Message(props) {
    return(
        <div className="message">
            <p>Name: {props.name}</p>
            <p>{props.message}</p>
        </div>
    );
}

export default Message;