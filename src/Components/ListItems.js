import React, { Component } from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numbers: [
                {
                id: 1,
                name: 'A'
                },
                {
                id: 2,
                name: 'B'
                },
                {
                id: 3,
                name: 'C'
                }
            ]
         }
    }
    render() { 

        let listItems = this.state.numbers.map((number) =><li key={number.id}>{number.name}</li>);

        return ( <ul>{listItems}</ul> );
    }
}
 
export default ListItems;