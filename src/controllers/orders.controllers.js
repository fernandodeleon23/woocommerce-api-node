
const store = require('../../config')

const getOrdersByUser = ( req, res ) => {

    const user_id = req.params.user_id

    store.WooCommerce.get("orders?customer="+user_id)
    .then((response) => {
        res.send(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}

module.exports = {
    getOrdersByUser
}