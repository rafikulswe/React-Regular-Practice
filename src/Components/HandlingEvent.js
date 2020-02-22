import React, {Component} from 'react'

class HandlingEvent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {  }
    }
    //If we use this function we have to bind this function.
    handleClick () {
        console.log('Rafi', this);
    }
    //Not need to bind.
    changeHandler = () => {
        console.log('Rafi', this);
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={this.changeHandler}>Best</button>
            </div>
        );
    }
}
 
export default HandlingEvent;