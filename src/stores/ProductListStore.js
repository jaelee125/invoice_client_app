'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import InvoiceClientConstants from '../constants/InvoiceClientConstants';
import _ from 'underscore';

var products = [];
var allProducts = [];

function loadProductData(data) {
  allProducts = data;
  products = data;
}

function searchForProduct(query){
  saveSession("searchInput", query);
  var queryResult = [];

  allProducts.map(product => {
    if(product.name.toLowerCase().indexOf(query.toLowerCase()) != -1){
      queryResult.push(product)
    }
  });

  products = queryResult;
}

function saveSession(key, value) {
  sessionStorage.setItem(key, value);
}

var ProductListStore = _.extend({}, EventEmitter.prototype,{

  getProducts() {
    return products;
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener (callback) {
    this.on('change', callback);
  },

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case InvoiceClientConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    case InvoiceClientConstants.PRODUCT_SEARCH:
      searchForProduct(action.searchString);
      break;

    default:
      return true;
  }

  ProductListStore.emitChange();

  return true;

});

module.exports = ProductListStore;
