//app.js
const express = require('express');

const app = express();

// app.use( (req, res, next) => {
// 	console.log('first middleware success');
// 	next();
// } );

// app.use( (req, res, next) => {
// 	console.log('second middleware successfully accessed');
// 	res.send("<h1>part 2 of assignment 2</h1>");
// } )

app.use('/users', (req, res, next) => {
	console.log('/users path is being handled');
	res.send("<h2>There are no users at the moment, try again later.</h2>")
});

app.use('/', (req, res, next) => {
	console.log('/ path is being handled');
	res.send("<h1>404 Page not found!</h1>");
});

app.listen(7000);
