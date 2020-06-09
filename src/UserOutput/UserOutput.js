import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is a sample text</p>
            <p>Hello everyone!!! my username is {props.userName}</p>
        </div>
    );
};

export default userOutput;