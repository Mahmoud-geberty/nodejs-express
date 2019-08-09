const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //fetch the previous cart
    let cart = {products: [], totalPrice: 0};
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //anaylyze cart/ see if product exists. if does...
      //increment product.qty. else make a new one.
      let existingProductIndex = cart.products.findIndex(prod => prod.id = id);
      let existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = {...existingProduct};
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      }else {
        updatedProduct = {id: id, qty: 1};
        cart.products = [...cart.products, updatedProduct];
      }
      //add the added price to the existing total price
      cart.totalPrice += +productPrice;
      fs.writeFile(p , JSON.stringify(cart), err => {
        console.log(err);
      });
    });
    
  }
}