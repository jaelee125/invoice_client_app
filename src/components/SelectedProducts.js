'use strict';

import React, {Component} from 'react';
import Product from './Product';

export default class SelectedProducts extends Component {
  render() {
    return (
      <div className="selected-products">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="selected-product">Product Name</div>
            <div className="selected-product">Quantity</div>
            <div className="selected-product">Price</div>
            <div className="selected-product">Total Price</div>
          </li>
          {this.props.selectedProducts.map(selectedProduct =>
            <Product key={selectedProduct.name} product={selectedProduct}></Product>
          )}
        </ul>
      </div>
    );
  }

}
