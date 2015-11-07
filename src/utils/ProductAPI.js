import InvoiceClientActions from '../actions/InvoiceClientActions';

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getProductData: function(data) {
    var data = JSON.parse(localStorage.getItem('product'));
    InvoiceClientActions.receiveProduct(data);
    var data = JSON.parse(localStorage.getItem('selectedProduct'));
  }

};
