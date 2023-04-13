const mysql = require('mysql2');

const dbUrl =  process.env.DB_URL ||"mysql://127.0.0.1:3306/test"
const con = mysql.createConnection(dbUrl);
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });


module.exports=con
