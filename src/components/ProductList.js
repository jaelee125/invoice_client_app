'use strict';

import React, {Component} from 'react';
import InvoiceClientActions from '../actions/InvoiceClientActions';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.products.map(product =>
          <li key={product.name}>
            {product.name} {product.price}
            <button onClick={this.addProduct.bind(this,product)}>+</button>
          </li>)}
        </ul>
      </div>
    );
  }

  addProduct(product) {
    InvoiceClientActions.addProduct(product);
  }
}
