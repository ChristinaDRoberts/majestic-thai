import React, { Component } from 'react';


\

class MenuList extends Component {
        constructor(props) {
            super(props);
             this.state(props) (function() {
                return {active: false};

            },
            this.state.item = [
                {name: 'Pad Thai', price: 17},
                {name: 'Khao Pad', price: 14},
                {name: 'Gaeng Daeng', price: 12},
                {name: 'Tom Yum Goong', price: 15}
            ]);
            this.clickHandler = this.clickHandler.bind(this);
        }


    clickHandler() {
        var active = !this.state.active;
        this.setState({active: active});
        // Notify the ServiceChooser, by calling its addTotal method
        this.props.addTotal(active ? this.props.price : -this.props.price);
    }

    render() {
        return (
            <p className={this.state.active ? 'active' : ''}
               onClick={this.clickHandler}>{this.props.name}<b>${this.props.price.toFixed(2)}</b></p>
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
