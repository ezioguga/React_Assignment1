import React from 'react';

const userInput = (props) => {
//inline style
    const myStyle = {
        border: '2px solid blue'
    };

    return <input 
        style= {myStyle} 
        type="text" 
        onChange= {props.changed} 
        value={props.currentName}/>
};

export default userInput;