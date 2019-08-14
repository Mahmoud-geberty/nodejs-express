const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root", 
  database: "nodejs-express",
  password: "socerfotb"
});

module.exports = pool.promise();