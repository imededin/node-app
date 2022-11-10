// var http = require('http');
// var fs = require('fs');
var path = require("path");
// var bodyParser = require('body-parser');
// var cors = require('cors')

var con=require("./models/db.js")
// var express = require('express');
 const wiki = require("./routes/costumer.js");
// //



// //

// var app = express();
// var server = http.createServer(app);
// app.use(bodyParser.urlencoded({extended: false}));
// app.use("/",wiki)
// app.use(cors())
// app.set('port', process.env.PORT || 3002);
// app.set('view engine', 'ejs');
// //app.use(express.static(path.join(__dirname,'./public')));
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });







// server.listen(3002,function(){ 
//     console.log("Server listening on port: 3002")});


const express = require("express");
var cors = require('cors')
//const quote = require('inspirational-quotes');

const app = express();

app.use(cors({
    origin: '*'
}));

// app.get("/", function(req, res){ // quotes is send to the homepage of app
//     var sql="select * from customers"
//   con.query(sql,function(err,data){
//     if (err) throw err;
//     res.send(data)
//   })})
     //res.send([{name:"imed",email:"imed@node"}]);
     //});

app.get("/",function(req,res){
    res.send([{name:"imed",email:"imed@node"}])
})

let port = process.env.PORT;
if (port == null || port == ""){
    port = 5000;
}
app.listen(port, () =>{
    console.log("Server is running...");
});