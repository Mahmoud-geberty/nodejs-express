const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
	console.log("\nadd product middleware");
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
} );

router.post('/add-product', (req, res, next) => {
	console.log('\nreceiveing post request at /product ...')
	products.push({title: req.body.title});
	console.log('redirecting to / ...')
	res.redirect('/');
} );

module.exports.routes = router;
module.exports.products = products;
