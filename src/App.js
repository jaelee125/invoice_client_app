'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductData from './ProductData';
import ProductAPI from './utils/ProductAPI';
import Header from './components/Header';
import ProductListContainer from './components/ProductListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <ProductListContainer></ProductListContainer>
      </div>
    );
  }
}

ProductData.init();
ProductAPI.getProductData();

ReactDOM.render(
  <App />, document.getElementById('appContainer')
)
