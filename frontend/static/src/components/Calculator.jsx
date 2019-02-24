import React, { Component } from 'react';
import MenuList from "../components/MenuList";



class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };


        this.addTotal = this.addTotal.bind(this);
    }

    addTotal(price) {
        this.setState({total: this.state.total + price});
    }

    render() {
        var self = this;
        this.orders = this.props.orders.map(function (s) {
            return (
                <MenuList name={item.name} price={item.price} active={item.active} addTotal={self.addTotal}/>
            );
        });

        return (
            <div>
                <h1>Our Menu Items</h1>
                <div id="services">
                    {items}
                    <p id="total">Total<b>${this.state.total.toFixed(2)}</b></p>
                </div>
            </div>
        );

    }
}


export default Calculator