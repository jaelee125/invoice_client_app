'use strict'

module.exports = {

  submitForm: function() {
    $.ajax("http://localhost:3000/invoices/", {
      method: 'POST',
      data: {
        "invoiceNumber": sessionStorage.getItem("invoiceNumber"),
        "name": sessionStorage.getItem("name"),
        "date": sessionStorage.getItem("date"),
        "selectedProducts": JSON.parse(sessionStorage.getItem("selectedProducts")),
        "totalPrice": sessionStorage.getItem("totalPrice"),
        "tax": sessionStorage.getItem("tax"),
        "grandTotal": sessionStorage.getItem("grandTotal")
      }
    });
  }
}
