'use strict';

import React, {Component} from 'react';
import Product from './Product';

export default class SelectedProducts extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.selectedProducts.map(selectedProduct =>
            <Product key={selectedProduct.name} product={selectedProduct}></Product>
          )}
        </ul>
      </div>
    );
  }

}
