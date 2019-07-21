const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
	console.log("add product middleware");
	res.send("<form action='/admin/product' method='post'><input name='title'/><button type='submit'>add</button></form>");
} );

router.post('/product', (req, res, next) => {
	console.log('receiveing post request at /product ...')
	console.log(req.body);
	console.log('\nredirecting to / ...')
	res.redirect('/');
} );

module.exports = router;
