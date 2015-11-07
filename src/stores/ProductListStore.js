import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import InvoiceClientConstants from '../constants/InvoiceClientConstants';
import _ from 'underscore';
import ProductAPI from '../utils/ProductAPI';

var allProducts = {};
var products = {};

function loadProductData(data) {
  allProducts = data;
  products = data;
}

function sortByProductName(product1, product2) {
  if(product1.name < product2.name) return -1;
  if(product1.name > product2.name) return 1;
  return 0;
}

function searchForProduct(query){
  var queryResult = [];

  allProducts.map(product => {
    if(product.name.toLowerCase().indexOf(query.toLowerCase()) != -1){
      queryResult.push(product)
    }
  });

  products = queryResult;
}

var ProductListStore = _.extend({}, EventEmitter.prototype,{

  getProduct() {
    return products.sort(sortByProductName);
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
