'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import InvoiceClientConstants from '../constants/InvoiceClientConstants';
import _ from 'underscore';

var selectedProducts = [];
var tax = 0.00;
var taxRate = 0.10;
var invoiceTotalPrice = 0.00;

function addProduct(product) {
  if(selectedProducts.length == 0){
    selectedProducts.push(product);
  } else {
    for(var i = 0; i < selectedProducts.length; i++){
      if(selectedProducts[i].name == product.name) {
        product.quantity = selectedProducts[i].quantity + 1;
        product.totalPrice = selectedProducts[i].quantity * selectedProducts[i].price;
        selectedProducts[i] = product;
        break;
      } else if(i == selectedProducts.length-1) {
        selectedProducts.push(product);
        break;
      }
    }
  }

  saveSession("selectedProducts", JSON.stringify(selectedProducts));
}

function updateProduct(product, quantity, price) {
  for(var i = 0; i < selectedProducts.length; i++){
    if(selectedProducts[i].name == product.name) {
      product.quantity = quantity;
      product.price = parseFloat(price).toFixed(2);
      product.totalPrice = parseFloat(quantity * price).toFixed(2);
      selectedProducts[i] = product;
    }
  }

  saveSession("selectedProducts", JSON.stringify(selectedProducts));
}


function removeProduct(productToRemove) {
  selectedProducts = selectedProducts.filter(function (product) {return product.name != productToRemove.name});
  saveSession("selectedProducts", JSON.stringify(selectedProducts));
}

function clearForm() {
  selectedProducts = [];
}

function loadSelectedProducts() {
  selectedProducts = JSON.parse(sessionStorage.getItem("selectedProducts"));
  if(selectedProducts == null)
    selectedProducts = [];
}

function saveSession(key, value) {
  sessionStorage.setItem(key, value);
}

function calculateInvoiceTotalPrice(){

  if(selectedProducts.length != 0){
    invoiceTotalPrice = 0.00;
    selectedProducts.map(product => {
      invoiceTotalPrice=invoiceTotalPrice + parseFloat(product.totalPrice)
    });

  } else {
      invoiceTotalPrice = 0.00;
  }

  saveSession("totalPrice", invoiceTotalPrice);
  return invoiceTotalPrice;
}

function calculateInvoiceTax(){
  tax = (invoiceTotalPrice * taxRate);
  saveSession("tax", tax);
  return tax;
}

function calculateInvoiceGrandTotal(){
  saveSession("grandTotal", parseFloat(invoiceTotalPrice) + parseFloat(tax));
  return parseFloat(invoiceTotalPrice) + parseFloat(tax);
}

var InvoiceFormStore = _.extend({}, EventEmitter.prototype,{

  getSelectedProducts() {
    return selectedProducts;
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener (callback) {
    this.on('change', callback);
  },

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  },

  saveValue(key, value) {
    saveSession(key, value);
  },

  calculateInvoiceTotalPrice(){
    return calculateInvoiceTotalPrice();
  },

  calculateInvoiceTax(){
    return calculateInvoiceTax();
  },
  calculateInvoiceGrandTotal(){
    return calculateInvoiceGrandTotal();
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case InvoiceClientConstants.PRODUCT_ADD:
      addProduct(action.product);
      break;

    case InvoiceClientConstants.PRODUCT_REMOVE:
      removeProduct(action.product);
      break;

    case InvoiceClientConstants.PRODUCT_UPDATE:
      updateProduct(action.product, action.quantity, action.price);
      break;

    case InvoiceClientConstants.FORM_CLEAR:
      clearForm();
      break;

    case InvoiceClientConstants.SELECTED_PRODUCTS_LOAD:
      loadSelectedProducts();
      break;

    default:
      return true;
  }

  InvoiceFormStore.emitChange();

  return true;

});

module.exports = InvoiceFormStore;
