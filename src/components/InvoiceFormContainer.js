'use strict';

import React, {Component} from 'react';
import InvoiceFormStore from '../stores/InvoiceFormStore';
import SelectedProducts from './SelectedProducts';
import InvoiceHeader from './InvoiceHeader';
import InvoiceClientActions from '../actions/InvoiceClientActions';
import PriceSection from './PriceSection';
import InvoiceFormAPI from '../utils/InvoiceFormAPI';

export default class InvoiceFormContainer extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <InvoiceHeader></InvoiceHeader>
          <SelectedProducts selectedProducts={this.state.selectedProducts}></SelectedProducts>
          <PriceSection selectedProducts={this.state.selectedProducts}></PriceSection>
          <div className="create-invoice"><button className="btn btn-default" type="submit">Create Invoice</button></div>
        </form>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      isInvoiceNumberValid: false
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

  submitForm() {
    debugger;
    InvoiceFormAPI.submitForm();
    InvoiceClientActions.clearForm();
    sessionStorage.clear();
  }
}
