//app.js
const http = require('http');
const express = require('express');

const app = express(); // app is a valid request handler and used for server

app.use ('/', (req, res, next) => {
	console.log("This part always runs");
	next();
} )

app.use ('/add-product', (req, res, next) => {
	console.log("add product middleware");
	res.send("<h1>the 'add product' page</h1>");
} )

app.use ('/', (req, res, next) => {
	console.log("default/404 page");
	// res.send("<h1>404 ERROR page not found!!!</h1>");
} )

app.listen(8000);
