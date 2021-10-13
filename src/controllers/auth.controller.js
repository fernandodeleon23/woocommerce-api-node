
const store = require('../../config')

const login = ( req, res ) => {
    
    res.send( store.wp.users() )
}

module.exports = {
    login
}