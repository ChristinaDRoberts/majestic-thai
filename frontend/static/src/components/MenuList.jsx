import React, { Component } from 'react';



class MenuList extends Component {
    //not really sure if i need props here or super, but since i have state, i need something, look back to docs
        constructor(props) {
            super(props);
            //state bc it changes over time depending what the user has clicked on
             this.state = {

                 menu: [
                     //these get converted to props when called in main App
                    {name: 'Pad Thai', price: 17},
                    {name: 'Khao Pad', price: 14},
                    {name: 'Gaeng Daeng', price: 12},
                    {name: 'Tom Yum Goong', price: 15},
                 ]
             };

             //binding the method made below
            this.clickHandler = this.clickHandler.bind(this);
        }

          addTotal(price) {
            this.setState({total: this.state.total + price});
    }


    clickHandler() {
            //this makes the item active when item is clicked on and changes the total in calculator
            //this does change over time so I think it should remain a state

    }

    render() {
        return (
         //make a for loop to print each item
            <p className="menuItem">
        )
    }
}




export default MenuList




//




    // render() {
//         console.log('props', this.props);
//         const { details } = this.props;
//
//
//         // let menuItems= [{name:PadThai, price: 5}, {name: redcurry, price: 2}];
//         // let items = this.props.menuItems.map(function (item, index) {
//
//                 return (
//                   <li className="menu">
//                     {/*<img src={details.image} alt={details.name}/>*/}
//                     <h3 className="item-name">{details.name} </h3>
//                     <p>{details.message}</p>
//                     {/*<button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{ buttonText }</button>*/}
//                   </li>
//     )
//
//
//
//     }
// }
