'use strict';

import React, {Component} from 'react';
import InvoiceClientActions from '../actions/InvoiceClientActions';

export default class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        <ul className="list-group">
        {this.props.products.map(product =>
          <li className="list-group-item" key={product.name}>
            <div className="product-list-element">{product.name}</div>
            <div className="product-list-element">${product.price}</div>
            <div className="product-list-element"><button className="btn btn-default" onClick={this.addProduct.bind(this,product)}>Add Product</button></div>
          </li>)}
        </ul>
      </div>
    );
  }

  addProduct(product) {
    InvoiceClientActions.addProduct(product);
  }
}
