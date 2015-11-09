'use strict';

import React, {Component} from 'react';
import InvoiceFormStore from '../stores/InvoiceFormStore';

export default class PriceSection extends Component {
  render() {
    return (
      <div className="price-section">
        <div className="total-price">Total Price: ${parseFloat(this.state.totalPrice).toFixed(2)}</div>
        <div className="tax">Tax: ${parseFloat(this.state.tax).toFixed(2)}</div>
        <div className="grand-total">Grand Total: ${parseFloat(this.state.grandTotal).toFixed(2)}</div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0.00,
      tax: 0.00,
      grandTotal: 0.00
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      totalPrice: InvoiceFormStore.calculateInvoiceTotalPrice(),
      tax: InvoiceFormStore.calculateInvoiceTax(),
      grandTotal: InvoiceFormStore.calculateInvoiceGrandTotal()
    });
  }

}
