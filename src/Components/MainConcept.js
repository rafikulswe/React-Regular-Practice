import React, { Component } from 'react';
import Welcome from './Welcome'
import WelcomeFunc from './WelcomeFunc'

 
class MainConcept extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    formatDate(date){
        return date.toLocaleDateString();
    }
    render() { 
        return ( 
            <div>
                <Welcome name={'Mr. Rafikul Islam'}/>
                <WelcomeFunc name={'Rafi'} date={this.state.date}/>
                <h1>This is {this.formatDate(this.state.date)}</h1>
            </div> 
        );
    }
}
 
export default MainConcept;