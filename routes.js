'use strict';

const products = require('./handlers/products');

module.exports = [
	{method: 'GET', path: '/api/products', 			handler: products.getProducts},
	{method: 'GET', path: '/api/products/{id}', handler: products.getProductById}
];

