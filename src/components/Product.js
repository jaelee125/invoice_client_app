'use strict';

import React, {Component} from 'react';
import InvoiceClientActions from '../actions/InvoiceClientActions';

export default class Product extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="selected-product">{this.props.product.name}</div>
        <div className="selected-product"><input type="number" min="1" ref="quantity" onBlur={this.update.bind(this)}/></div>
        <div className="selected-product"><input type="number" ref="price" onBlur={this.update.bind(this)}/></div>
        <div className="selected-product">${this.props.product.totalPrice.toFixed(2)}</div>
        <div className="selected-product"><button className="btn btn-default" onClick={this.removeProduct.bind(this)}>Remove Product</button></div>
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
