import React from "react";
import PropTypes from "prop-types";


function OrderTable(props){
  var orders = props.order;
  console.log(orders);
  // console.log('order', order);

  return !orders.length ? (
    <p>No Orders</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{orders.length} items</strong>
      </h2>

      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(orders[0]).map(el => <th key={el[0]}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              {Object.entries(order).map(el => <td key={`${order.id}-${el[0]}`}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );

}

OrderTable.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderTable;