const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    //if the product already exists then just 
    //update its content
    if (this.id) {
      getProductsFromFile(products => {
        const existingProductIndex = products.findIndex(p => p.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      });
    } else {
      this.id = Math.random().toString();
      getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      });
    }
  }
    

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findOne(id, cb) {
    getProductsFromFile(products => {
      const productIndex = products.findIndex(p => p.id === id);
      const product = products[productIndex];
      cb(product);
      }
    );
  }

  static deleteOne(id, cb) {
    getProductsFromFile(products => {
      const indexToDelete = products.findIndex(p => p.id === id);
      const updatedProducts = [...products];
      const deletedObj = updatedProducts.splice(indexToDelete, 1);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log(err);
      });
      cb(deletedObj);
    })
  }
};

  
