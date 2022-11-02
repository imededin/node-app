var http = require('http');
var fs = require('fs');
var path = require("path");
var bodyParser = require('body-parser');


var express = require('express');
const wiki = require("./routes/costumer.js");
//



//
var app = express();
var server = http.createServer(app);
app.use(bodyParser.urlencoded({extended: false}));
app.use("/",wiki)
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname,'./public')));






server.listen(3002,function(){ 
    console.log("Server listening on port: 3002")});