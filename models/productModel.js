let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ];
  
  const Product = {
    getAllProducts: (result) => {
      result(null, products);
    },
    addProduct: (product, result) => {
      products.push(product);
      result(null, product);
    },
  };
  
  module.exports = Product;
  