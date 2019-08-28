const getDb = require("../util/db").getDb;

class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then(result => {
        console.log("insertion result =", result);
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = Product;
