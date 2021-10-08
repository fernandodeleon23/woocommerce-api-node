
const store = require('../../config')

const getConstumer = ( req, res ) => {

    const id = req.params.id

    store.WooCommerce.get("customers/"+id)
    .then((response) => {
        res.send(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}

module.exports = {
    getConstumer
}