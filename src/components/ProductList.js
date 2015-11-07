'use strict';

import React, {Component} from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.products.map(product =>
          <li key={product.name}>
            {product.name} ${product.price}
            <button>+</button>
          </li>)}
        </ul>
      </div>
    );
  }
}
