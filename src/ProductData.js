module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: 1,
        name: 'Small Monitor',
        price: 99.99,
        quantity: 1,
        totalPrice: 99.99
      },
      {
        id: 2,
        name: 'Medium Monitor',
        price: 149.99,
        quantity: 1,
        totalPrice: 149.99
      },
      {
        id: 3,
        name: 'Large Monitor',
        price: 199.99,
        quantity: 1,
        totalPrice: 199.99
      },
      {
        id: 4,
        name: 'Regular Monitor',
        price: 149.99,
        quantity: 1,
        totalPrice: 149.99
      },
      {
        id: 5,
        name: 'Expensive Monitor',
        price: 399.99,
        quantity: 1,
        totalPrice: 399.99
      },
      {
        id: 6,
        name: 'Small Laptop',
        price: 499.99,
        quantity: 1,
        totalPrice: 499.99
      },
      {
        id: 7,
        name: 'Large Laptop',
        price: 599.99,
        quantity: 1,
        totalPrice: 599.99
      },
      {
        id: 8,
        name: 'Camera',
        price: 299.99,
        quantity: 1,
        totalPrice: 299.99
      },
      {
        id: 9,
        name: 'Television',
        price: 249.99,
        quantity: 1,
        totalPrice: 249.99
      },
      {
        id: 10,
        name: 'Camcorder',
        price: 349.99,
        quantity: 1,
        totalPrice: 349.99
      }
    ]));
  }

};
