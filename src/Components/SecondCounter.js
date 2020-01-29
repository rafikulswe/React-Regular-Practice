import React, { Component } from 'react';

class SecondCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { second: 0 }
    }
    tick(){
        this.setState({
            second: this.state.second + 1
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() { 
        return ( <div>Second: { this.state.second }</div> );
    }
}
 
export default SecondCounter;