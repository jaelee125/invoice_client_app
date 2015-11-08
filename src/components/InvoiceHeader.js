'use stict'

import React, {Component} from 'react';
import InvoiceFormStore from '../stores/InvoiceFormStore';

export default class Product extends Component {
  render() {
    return (
      <div>
        <label>Invoice Number</label>
        <input type="text" ref="invoiceNumber" placeholder="Invoice Number" onBlur={this.saveValue.bind(this)}/>
        <label>Name</label>
        <input type="text" ref="name" placeholder="Your name..." onBlur={this.saveValue.bind(this)}/>
        <label>Date</label>
        <input type="text" ref="date" placeholder="Date..." onBlur={this.saveValue.bind(this)}/>
      </div>
    );
  }

  componentDidMount() {
    this.refs.invoiceNumber.value = sessionStorage.getItem('invoiceNumber');
    this.refs.name.value = sessionStorage.getItem('name');
    this.refs.date.value = sessionStorage.getItem('date');
  }

  saveValue(){
    InvoiceFormStore.saveValue("invoiceNumber", this.refs.invoiceNumber.value);
    InvoiceFormStore.saveValue("name", this.refs.name.value);
    InvoiceFormStore.saveValue("date", this.refs.date.value);
  }

}
