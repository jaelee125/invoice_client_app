'use strict';

import React, {Component} from 'react';
import InvoiceClientActions from '../actions/InvoiceClientActions';

export default class Product extends Component {
  render() {
    return (
      <li>
        {this.props.product.name}
        <input type="text" ref="quantity" onBlur={this.update.bind(this)}/>
        <input type="text" ref="price" onBlur={this.update.bind(this)}/>
        {this.props.product.totalPrice}
        <button onClick={this.removeProduct.bind(this)}>X</button>
      </li>
    );
  }

  componentDidMount() {
    this.refs.quantity.value = this.props.product.quantity;
    this.refs.price.value = this.props.product.price;
  }

  componentWillReceiveProps(nextProps) {
    this.refs.quantity.value = nextProps.product.quantity;
    this.refs.price.value = nextProps.product.price;
  }

  update() {
    InvoiceClientActions.updateProduct(this.props.product, this.refs.quantity.value, this.refs.price.value);
  }

  removeProduct() {
    InvoiceClientActions.removeProduct(this.props.product);
  }

}
