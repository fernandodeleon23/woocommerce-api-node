
const store = require('../../config')
const categoryController = require('./categories.controller')

const getProduct = ( req, res ) => {

  const slug = req.params.slug;

  store.WooCommerce.get('products/?slug='+slug )
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

const getProductsByCat = (req, res) => {

  const slug = req.params.slug

  // Obtener categoria por el slug

  store.WooCommerce.get("products/categories?slug="+slug)
    .then((response) => {

      // Sacar el ID

      const catID = JSON.stringify( response.data[0].id )

      // Traer productos por el ID

      store.WooCommerce.get("products?category="+catID)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    })
    .catch((error) => {
      console.log(error.response.data);
  });

  /*store.WooCommerce.get("products?category="+id)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });*/
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

const getByCat = (req, res) => {
  const id = req.params.id

  let data = {
    product_category: {
      id: 86
    }
  };
  
  store.WooCommerce.get("products/categories?category=desayunos-y-frutas")
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
}

const getRelatedProducts = (req, res) => {

  const slug = req.params.cat_slug

  // Obtener categoria por el slug

  store.WooCommerce.get("products/categories?slug="+slug)
    .then((response) => {

      // Sacar el ID

      const catID = JSON.stringify( response.data[0].id )

      // Traer productos por el ID

      store.WooCommerce.get("products?category="+catID+'&per_page=4')
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    })
    .catch((error) => {
      console.log(error.response.data);
  });

}

module.exports = {
  getProduct,
  getProducts,
  getProductsByCat,
  getProductsByCatID,
  getByCat,
  getRelatedProducts
}