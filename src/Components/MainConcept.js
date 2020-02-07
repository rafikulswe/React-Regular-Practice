import React, { Component } from 'react';
import Welcome from './Welcome'

class MainConcept extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <Welcome name={'Mr. Rafikul Islam'}/>
                <h1>This is {new Date().toLocaleTimeString()}</h1>
            </div> 
        );
    }
}
 
export default MainConcept;