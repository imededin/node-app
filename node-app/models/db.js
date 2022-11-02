const mysql = require('mysql2');
const con = mysql.createConnection({
  host: process.env.DB_SERVER||'localhost',
  port: process.env.PORT||'3306',
  user: process.env.USER1||'root',
  password: process.env.PASSWORD||'admin',
  database: process.env.DB_NAME||'mysql'
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });


module.exports=con