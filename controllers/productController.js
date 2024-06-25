const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
  Product.getAllProducts((err, products) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching products' });
    } else {
      res.json(products);
    }
  });
};

exports.addProduct = (req, res) => {
  const product = req.body;
  Product.addProduct(product, (err, newProduct) => {
    if (err) {
      res.status(500).json({ message: 'Error adding product' });
    } else {
      res.json(newProduct);
    }
  });
};
