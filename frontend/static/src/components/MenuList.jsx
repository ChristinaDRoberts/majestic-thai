import React, { Component } from 'react';
// import React from 'react';


class ServiceChooser extends Component {
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
        var services = this.props.orders.map(function (s) {
            return (
                <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal}/>
            );
        });

        return (
            <div>
                <h1>Our services</h1>
                <div id="services">
                    {services}
                    <p id="total">Total<b>${this.state.total.toFixed(2)}</b></p>
                </div>
            </div>
        );

    }
}

class Service extends Component {
        constructor(props) {
            super(props);
             this.state(props) (function(s) {
                return {active: false};
            },
            this.props = [
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


// Render the ServiceChooser component, and pass the array of services
// React.render(<ServiceChooser items={ services } />, document.getElementById('container'));



export default ServiceChooser




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
//                   <li className="menu-fish">
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
