//the require keyword ships with nodejs so it doesn't need
//to be imported.
//
//anything else i want I have to require.

const http = require('http');
const fs = require('fs');

//the http core module comes with 'createServer' function 
//which as the name suggests, creates the server,
//it takes as an arg a callback which takes the request and
//the response as args and returns the server.
	//
	//createServer is called everytime a request is made

const server = http.createServer( (req, res) => {
	// console.log(req.method, req.headers);
//	process.exit();//unregisters the listener

	if (req.url === '/') {
		res.write("<html>");
		res.write("<head><title>my node app</title></head>");
		res.write("<body><h3>Enter a message</h3></br>");
		res.write("<form action='/message' method='POST'><input name='message'/><button type='submit'>send</button><form>");
		res.write("</body>");
		res.write("</html>");
		return res.end();
	}

	
	if (req.url === "/message" && req.method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			// the data event takes every chunk of data
			// as arg and does whatever logic i written in funcion body
			body.push(chunk);
		})

		req.on('end', () => {
			//parsedBody will look like => message=contentOfMessageInput
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split("=")[1];
			console.log("chuncking ended");
			console.log(message, "= the message written in message.txt");
			fs.writeFileSync('message.txt', message);
		}) 

		res.statusCode = 302;
		res.setHeader('Location', '/');
		console.log(req.headers);
		return res.end();
	}

	res.setHeader('Content-Type', 'text/html');
	res.write("<html>");
	res.write("<head><title>my node app</title></head>");
	res.write("<body><h1>welcome to my first node app</h1></body>");
	res.write("</html>");
	res.end();
} )

server.listen(3000);// 3000 = portnumber
