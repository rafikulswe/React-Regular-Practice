import React, { Component } from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numbers: [1, 2, 3, 4, 5]
         }
    }
    render() { 

        let listItems = this.state.numbers.map((number) =><li key={number.toString()}>{number}</li>);

        return ( <ul>{listItems}</ul> );
    }
}
 
export default ListItems;