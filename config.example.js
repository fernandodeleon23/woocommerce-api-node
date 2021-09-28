const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: '', // Your store URL
  consumerKey: '', // Your consumer key
  consumerSecret: '', // Your consumer secret
  version: 'wc/v3' // WooCommerce WP REST API version
});

module.exports = {
    WooCommerce
}