//the require keyword ships with nodejs so it doesn't need
//to be imported.
//
//anything else i want I have to require.

const http = require('http');

//the http core module comes with 'createServer' function 
//which as the name suggests, creates the server,
//it takes as an arg a callback which takes the request and
//the response as args and returns the server.
	//
	//createServer is called everytime a request is made

const server = http.createServer( (req, res) => {
	// console.log(req.method, req.headers);
//	process.exit();//unregisters the listener
	res.setHeader('Content-Type', 'text/html');
	res.write("<html>");
	res.write("<head><title>my node app</title></head>");
	res.write("<body><h1>welcome to my first node app</h1></body>");
	res.write("</html>");
	res.end();
} )

server.listen(3000);// 3000 = portnumber
