module.exports = {

  validateInvoiceNumber: function(invoiceNumber) {
    console.log(typeof invoiceNumber)
    if(typeof invoiceNumber === 'number'){
      alert("Invoice Number must be a number");
    }
  }
}
