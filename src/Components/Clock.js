import React from 'react';

const Clock = (props) => {
    return ( <h1>Now {new Date().toLocaleTimeString()}</h1> );
}

export default Clock;