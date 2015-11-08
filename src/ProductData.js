module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        name: 'Steam Controller',
        price: 49.99,
        quantity: 1,
        totalPrice: 49.99
      },
      {
        name: 'Xbox One',
        price: 399.99,
        quantity: 1,
        totalPrice: 399.99
      },
      {
        name: 'PlayStation 4',
        price: 399.99,
        quantity: 1,
        totalPrice: 399.99
      },
      {
        name: 'Kindle',
        price: 179.97,
        quantity: 1,
        totalPrice: 179.97
      },
      {
        name: 'TP-LINK Router',
        price: 257.95,
        quantity: 1,
        totalPrice: 179.97
      },
      {
        name: 'Amazon Fire TV',
        price: 99.99,
        quantity: 1,
        totalPrice: 99.99
      },
      {
        name: 'Fitbit Charge HR',
        price: 140.99,
        quantity: 1,
        totalPrice: 149.99
      },
      {
        name: 'Samsung 580 250GB SSD',
        price: 86.95,
        quantity: 1,
        totalPrice: 86.95
      },
      {
        name: 'Television',
        price: 249.99,
        quantity: 1,
        totalPrice: 249.99
      },
      {
        name: 'SanDisk Extreme 32gb microSDHC',
        price: 18.49,
        quantity: 1,
        totalPrice: 18.49
      },
      {
        name: 'Dell Inspiron Laptop',
        price: 799.99,
        quantity: 1,
        totalPrice: 799.99
      },
      {
        name: 'Lenovo Flex Laptop',
        price: 729.99,
        quantity: 1,
        totalPrice: 729.99
      },
      {
        name: 'Steam Link',
        price: 49.99,
        quantity: 1,
        totalPrice: 49.99
      },
      {
        name: 'Fire HD',
        price: 229.99,
        quantity: 1,
        totalPrice: 229.99
      }
    ]));
  }

};
