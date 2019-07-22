const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
	console.log("add product middleware");
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
} );

router.post('/add-product', (req, res, next) => {
	console.log('receiveing post request at /product ...')
	console.log(req.body);
	console.log('\nredirecting to / ...')
	res.redirect('/');
} );

module.exports = router;
