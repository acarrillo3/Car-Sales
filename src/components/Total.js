import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log('Total: ', props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    price: state.car.price
  }
}

export default connect(mapStateToProps, {})(Total);
