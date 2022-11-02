var con=require("../models/db.js")
var path=require("path");


exports.customer_add=(req,res)=>{
    var sql = "INSERT INTO customers (name, email) VALUES (?,?)";
    con.query(sql,[req.body.name,req.body.email],function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
}
exports.index=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
}
exports.list_customers=(req,res)=>{
  var sql="select * from customers"
  con.query(sql,function(err,data){
    if (err) throw err;
    res.render("customers",{data:data})
  })
}