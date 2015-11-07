'use strict';

import React, {Component} from 'react';
import ProductListStore from '../stores/ProductListStore';
import Search from './Search';
import ProductList from './ProductList';

export default class ProductListContainer extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <ProductList products={this.state.products}></ProductList>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      products: ProductListStore.getProduct()
    };
  }

  componentDidMount() {
    ProductListStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnMount() {
    ProductListStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      products: ProductListStore.getProduct()
    });
  }
}
