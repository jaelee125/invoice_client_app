'use strict';

import React, {Component} from 'react';
import InvoiceClientActions from '../actions/InvoiceClientActions';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type="search" ref="searchInput" placeholder="Enter a product to search" onChange={this.searchForProduct.bind(this)}></input>
      </div>
    );
  }

  searchForProduct() {
    InvoiceClientActions.searchForProduct(this.refs.searchInput.value);
  }

}

module.exports = Search
