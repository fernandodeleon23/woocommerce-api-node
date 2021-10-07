
const store = require('../../config')

const getCategory = ( req, res ) => {

    const id = req.params.id

    store.WooCommerce.get("products/categories/"+id)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

const getCategories = ( req, res ) => {

    store.WooCommerce.get("products/categories")
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

function getCategoryBySlug( slug ){
	
	store.WooCommerce.get("products/categories")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

module.exports = {
  getCategory,
  getCategories,
  getCategoryBySlug
}