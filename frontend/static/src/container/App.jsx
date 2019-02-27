import React, { Component } from 'react';

import OrderTable from '../components/OrderTable.jsx';

import MenuList from "../components/MenuList";



class App extends Component {
  constructor(props) {
    super(props);

    this.availableMenuItems = [
        //these get converted to props when called in main App
        {name: 'Pad Thai', price: 17},
        {name: 'Khao Pad', price: 14},
        {name: 'Gaeng Daeng', price: 12},
        {name: 'Tom Yum Goong', price: 15},
      ];
    console.log("avbail", this.availableMenuItems);
    this.state = {
      order: []
    };
    console.log("order", this.state.order)
  }


    componentDidMount() {
      // For development we will run django AND npm start
      // Django will run on port 8000 while react will run on port 3000
      // We need our API calls to point to django, so we will use process.env.REACT_APP_API_HOST
      // process.env.REACT_APP_API_HOST is set using a .env.development file.
      // https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables

      fetch(`${process.env.REACT_APP_API_HOST}/api/orders/`).then((response) => {
          if (response.status !== 200) {
            return this.setState({placeholder: "Something went wrong"});
          }

          return response.json();
        }).then((data) => {
          this.setState({orders: data, loaded: true});//     console.log('success')
           });
    }

    addOrder = (menuItem) => {
      //{} means unpack it and set it to current state, make it a variable called orders
      const {order} = this.state;
      order.push(menuItem);
      this.setState({order: order});

      const conf = {
        method: "post",
        body: JSON.stringify(menuItem),
        headers: new Headers({"Content-Type": "application/json"})

      };

      // fetch(`${process.env.REACT_APP_API_HOST}/api/orders/`, conf).then((response) => {
      //   if (response.status !== 201) {
      //     return this.setState({placeholder: "Something went wrong"});
      //   }
      //
      //   return response.json();
      // }).then((data) => {
      //    this.setState({orders: data, loaded: true});
      //   console.log('success')

        //was getting error with const instead of var under here
        // const {orders} = this.state;
        // orders.push(order);
        // this.setState({orders: orders});
      // });

      //{} means unpack it and set it to current state, make it a variable called orders


    };

    render(){

      return (


          <div className="App">

            <div className="MenuList">
              <MenuList />
            </div>


            <div>
              <MenuList choices={this.availableMenuItems} addOrder={this.addOrder} />
              <OrderTable order={this.state.order}/>
              </div>

          </div>
      );
              }
  }



export default App;


