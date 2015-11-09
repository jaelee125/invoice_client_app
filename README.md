# invoice_client_app

A Simple Invoice Client Application built on ReactJS, Flux Architecture, bootstrap, and gulp.
-	User can search for a product to add to the invoice by simply searching for the product name in the search box at top of the page
-	User can add multiple products to the invoice by clicking the ‘Add Product’ button next to the respective product
-	The ‘Add Product’ button will increase the quantity of the added product upon subsequent  presses
-	Product items include the product name, quantity, price, and total price
-	User can edit the quantity and price of the added product
-	User can remove the product from the invoice by clicking on the ‘Remove Product’ button
-	User can specify the customer name, date, and invoice number
- Invoice totals are displayed under the selected product lists
-	User can click on the ‘Create Invoice’ button to create a invoice
  - The invoices are persisted in the invoices.json file
-	Invoice number, name, date, selected products and its quantity, price, and total price are automatically saved using session storage.  All these information will be saved as long as the browser isn’t closed.
-	All form data is validated using HTML5

Prerequisite
-	Please use a browser compatible with HTML5, for the form validation are validated using HTML5

Installation
- Run "npm install"
- Run "gulp" to build

To Run
-	Start the JSON Server
  - run "json-server –watch invoices.json" from the root directory
-	Navigate to http://localhost:3000
