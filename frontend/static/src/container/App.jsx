import React, { Component } from 'react';

import OrderTable from '../components/OrderTable.jsx';
import OrderForm from '../components/OrderForm.jsx';
// import MenuList from "../components/menu.jsx";
import Menu from "../components/menu.jsx";



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      placeholder: 'Loading...',
      orders: []

    };

  }

  componentDidMount(){
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
      this.setState({orders: data, loaded: true});
      console.log('success')
    });
  }

  addOrder = (order) => {
    // Optimistically add the order to the orders array on the state
    // const {jobs} = this.state;
    // jobs.push(job);
    // this.setState({jobs: jobs});

    const conf = {
      method: "post",
      body: JSON.stringify(order),
      headers: new Headers({"Content-Type": "application/json"})
    };

    fetch(`${process.env.REACT_APP_API_HOST}/api/orders/`, conf).then((response) => {
      if (response.status !== 201) {
        // There was an error so roll back the state
        // var jobs = this.state.jobs;
        // jobs.pop();
        // return this.setState({placeholder: "Something went wrong", jobs: jobs});

        return this.setState({placeholder: "Something went wrong"});
      }

      return response.json();
    }).then((order) => {

      //was getting error with const instead of var under here
      const {orders} = this.state;
      orders.push(order);
      this.setState({orders: orders});
    });
  };

  render() {
    if(!this.state.loaded){
      var loadingMessage = <p className="alert-danger">{this.state.placeholder}</p>;
    }else{
      var loadingMessage = null;
    }

    return (



      <div className="App">
        <div className='menu'>

          <Menu/>
        </div>

        {loadingMessage}

        <h1>Print Orders</h1>

        <OrderForm addOrder={this.addOrder}/>

        <hr/>

        <h2>Create a Print Job</h2>

        <h2>Print Queue</h2>

        <OrderTable orders={this.state.orders}/>
      </div>
    );
  }
}


export default App;


