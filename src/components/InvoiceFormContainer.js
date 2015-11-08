'use strict';

import React, {Component} from 'react';
import InvoiceFormStore from '../stores/InvoiceFormStore';
import SelectedProducts from './SelectedProducts';
import InvoiceHeader from './InvoiceHeader';
import InvoiceClientActions from '../actions/InvoiceClientActions';

export default class InvoiceFormContainer extends Component {
  render() {
    return (
      <div>
        <form>
          <InvoiceHeader></InvoiceHeader>
          <SelectedProducts selectedProducts={this.state.selectedProducts}></SelectedProducts>
          <button type="submit" onClick={this.createInvoice.bind(this)}>Create Invoice</button>
        </form>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: []
    };
  }

  componentDidMount() {
    InvoiceFormStore.addChangeListener(this.onChange.bind(this));
    InvoiceClientActions.loadSelectedProducts();
  }

  componentWillUnMount() {
    InvoiceFormStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      selectedProducts: InvoiceFormStore.getSelectedProducts()
    });
  }

  createInvoice() {
    console.log("Invoice Created");
    InvoiceClientActions.clearForm();
    sessionStorage.clear();
  }
}
