import React, {Component} from "react";
import PropTypes from "prop-types";


class OrderForm extends Component {


  //when someone types in input box it will trigger this function
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();

    const {name, price} = this.state;
    const order = {name, price};

    this.props.addOrder(order);
    this.setState({name: '', price: ''});
  };

  render() {
    const {name, price} = this.state;

    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>



          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="price"
                onChange={this.handleChange}
                value={message}
                required
              />
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-info">
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default OrderForm;