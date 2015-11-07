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
  }

};

module.exports = InvoiceClientActions;
