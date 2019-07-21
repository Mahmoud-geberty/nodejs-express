//shop.js
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	console.log("Enter the / middleware");
	res.send("<h1>Hello from Express</h1>");
} );

module.exports = router;
