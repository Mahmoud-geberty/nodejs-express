//app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res, next) => {
	console.log("add product middleware");
	res.send("<form action='/product' method='post'><input name='title'/><button type='submit'>add</button></form>");
} );

app.post('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
} );

app.get('/', (req, res, next) => {
	console.log("Enter the / middleware");
	res.send("<h1>Hello from Express</h1>");
} );

app.listen(8000);
