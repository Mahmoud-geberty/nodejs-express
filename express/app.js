//app.js
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
	console.log('Enter the 404 middleware')
	res.status(404).send("<h1>PAGE NOT FOUND</h1>")
} )


app.listen(8000);
