'use stict'

import React, {Component} from 'react';
import InvoiceFormStore from '../stores/InvoiceFormStore';

export default class Product extends Component {
  render() {
    return (
      <div className="form-header">
        <h3>Invoice Form</h3>
        <div className="form-header-element">
          Invoice Number: <input className="input-group" type="number" ref="invoiceNumber" placeholder="Invoice Number" onBlur={this.saveValue.bind(this)}/>
        </div>
        <div className="form-header-element">
          Name: <input className="input-group" type="text" ref="name" placeholder="Name" onBlur={this.saveValue.bind(this)}/>
        </div>
        <div className="form-header-element">
          Date: <input className="input-group" type="date" ref="date" onBlur={this.saveValue.bind(this)}/>
        </div>
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
