'use strict';

import React, {Component} from 'react';
import InvoiceClientActions from '../actions/InvoiceClientActions';
import InvoiceFormStore from '../stores/InvoiceFormStore';

export default class Search extends Component {
  render() {
    return (
      <div className="input-group search">
        <input type="search" ref="searchInput" className="form-control" placeholder="Enter a product to search" onChange={this.searchForProduct.bind(this)}></input>
      </div>
    );
  }

  componentDidMount() {
    this.refs.searchInput.value = sessionStorage.getItem("searchInput");
    InvoiceClientActions.searchForProduct(this.refs.searchInput.value);
  }

  searchForProduct() {
    InvoiceClientActions.searchForProduct(this.refs.searchInput.value);
  }

}

module.exports = Search
