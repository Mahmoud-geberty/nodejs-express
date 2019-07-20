//routes.js
const routeHandler = (req, res) => {
	if (req.url === '/') {
		res.write('<html>');
		res.write('<head><title>greetings to the world</title></head>');
		res.write('<body>');
		res.write('<h1>Hello World!</h1><p>My name is mahmoud and I am an aspiring web developer learning node.js and express.js<br /> I plan on freelancing as a fullstack web developer</p>');
		res.write('<hr /><form action="/create-user" method="POST">');
		res.write('<input name="username" placeholder="Enter new user" /><button type="submit">Send</button>');
		res.write('</form>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	} else if ( req.url === '/users' ) {
		res.write('<html>');
		res.write('<head><title>Users List</title></head>');
		res.write('<body>');
		res.write('<h3>Here is the user list you asked for mate!</h3>');
		res.write('<ul>');
		res.write('<li>User 1</li><li>dummy user</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	} else if (req.url === '/create-user' && req.method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log("receiving chunks")
			body.push(chunk);
		});

		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const user = parsedBody.split('=')[1]
			console.log("user = ", user);
			res.statusCode = 302;
			res.setHeader( 'Location', '/users' );
			return res.end();
		})
	}
}

module.exports = routeHandler;
