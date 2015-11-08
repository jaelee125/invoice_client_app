import AppDispatcher from '../dispatcher/AppDispatcher';
import InvoiceClientConstants from '../constants/InvoiceClientConstants';

var InvoiceClientActions = {

  receiveProduct(data) {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.RECEIVE_DATA,
      data: data
    })
  },

  searchForProduct(searchString) {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.PRODUCT_SEARCH,
      searchString: searchString
    })
  },

  addProduct(product) {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.PRODUCT_ADD,
      product: product
    })
  },

  removeProduct(product) {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.PRODUCT_REMOVE,
      product: product
    })
  },

  clearForm() {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.FORM_CLEAR,
    })
  },

  updateProduct(product, quantity, price) {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.PRODUCT_UPDATE,
      product: product,
      quantity: quantity,
      price: price
    })
  },

  loadSelectedProducts() {
    AppDispatcher.handleAction({
      actionType: InvoiceClientConstants.SELECTED_PRODUCTS_LOAD
    })
  }

  }

module.exports = InvoiceClientActions;
