import InvoiceClientActions from '../actions/InvoiceClientActions';

module.exports = {

  getProductData: function(data) {
    var data = JSON.parse(localStorage.getItem('product'));
    InvoiceClientActions.receiveProduct(data);
    var data = JSON.parse(localStorage.getItem('selectedProduct'));
  }

};
