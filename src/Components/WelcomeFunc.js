import React from 'react';

const WelcomeFunc = (props) => {
    const formatDate = (date) =>{
        return date.toLocaleDateString();
    }
    return ( <h1>Hi! {props.name} this is {formatDate(props.date)} comes from stateless function</h1> );
}
 
export default WelcomeFunc;