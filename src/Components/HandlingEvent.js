import React, {Component} from 'react'

class HandlingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //it's working good without binding.
    handleClick = () => {
        console.log('Rafi', this)
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={this.handleClick}>Another</button>
            </div>
        );
    }
}
 
export default HandlingEvent;