import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid cyan',
        padding: '10px',
        marginTop: '10px',
        cursor: 'text'
    }
    return (
        <input type="text" onChange={props.changed} value={props.name} style={inputStyle} />
    );
}

export default userInput;