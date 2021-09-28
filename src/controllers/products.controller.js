
const store = require('../../config')

const getProduct = ( req, res ) => {

  const id = req.params.id;

  store.WooCommerce.get('products/'+id )
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
}

const getProducts = (req, res) => {

    store.WooCommerce.get("products")
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

const getProductsByCatID = (req, res) => {

  const id = req.params.id

  store.WooCommerce.get("products?category="+id)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
}

module.exports = {
  getProduct,
  getProducts,
  getProductsByCatID
}