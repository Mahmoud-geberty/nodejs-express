//the require keyword ships with nodejs so it doesn't need
//to be imported.
//
//anything else i want I have to require.

const http = require('http');
const routes = require('./routes');

//the http core module comes with 'createServer' function 
//which as the name suggests, creates the server,
//it takes as an arg a callback which takes the request and
//the response as args and returns the server.
	//
	//createServer is called everytime a request is made

const server = http.createServer(routes);

server.listen(8000);// 3000 = portnumber
