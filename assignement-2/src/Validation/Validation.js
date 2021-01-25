import React from 'react';

const validation = (props) => {
    const minLength = 5;
    let message = props.length > minLength ?
        "Text long enough":
        "Text too short";
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default validation;