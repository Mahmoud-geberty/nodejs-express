const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    edit: ""
  });
};

exports.postAddProduct = (req, res) => {
  const id = null;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(id, title, imageUrl, description, price);
  product.save();
  res.redirect("/admin/products");
};

//route => GET /admin/edit-product/:prodID?edit=true
//edit an existing product
exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  Product.findOne(req.params.prodID, product => {
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/add-product",
      product: product,
      edit: editMode
    });
  })
};

//route => POST /admin/edit-product?id={{product.id}}
// update an existing product
exports.postEditProduct = (req, res) => {
  const id = req.query.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(id, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

//route => POST /admin/delete-product
//delete the product whose id is the request body
exports.postDeleteProduct = (req, res) => {
  const prodID = req.body.prodID;
  Product.deleteOne(prodID, (deletedObj) => {
    console.log("deleted object =>", deletedObj);
    res.redirect('/admin/products');
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products"
    });
  });
};
