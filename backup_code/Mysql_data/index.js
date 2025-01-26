const mysql = require("mysql");
const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_mlm",
});
// dbConnect.connect((err) =>{
//     if(err){
//         console.warn('Error connecting to database');
//     }else{
//         console.warn('Connected to database');
//     }
// });


dbConnect.query("SELECT * FROM user", (err, result) => {
  console.warn("Fetch result", result);
});
// Get data from Mysql
const express = require("express");
const app = express();
const dbConnect = require("./config/mysql_config");

//get data from mysql
app.get("/", (req, resp) => {
  dbConnect.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
    console.warn(result);
  });
  ///resp.send("Hello World");
});

//insert data in mysql 
//1. insert static data 
app.post("/", (req,resp) =>{
  let data = {email:"node@tect.com",password:123456,mobile:8882165415,address:"Noida",account:8952137,side:"right"};//Static Data
  dbConnect.query("INSERT INTO user SET ?", data, (err, result,fields) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      resp.send(result);
      }
  });
});
//2. insert static data 
app.post("/", (req,resp) =>{
  const data = req.body;
  dbConnect.query("INSERT INTO user SET ?", data, (err, result,fields) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      resp.send(result);
      }
  });
});
// update data  statically
app.put('/update/{id}',(req,resp)=>{
  // const data = ["Hari@test.com",'India#4312','right','8882165414','2'];
  const data = [req.body.email, req.body.password, req.body.side, req.body.mobile, req.params.id];
  dbConnect.query("UPDATE user SET email = ?, password = ?, side=?, mobile=? WHERE id = ?",data,(err,result,fields)=>{
    if(err)
      {
        console.log(err);
        }
        else
        {
          resp.send(result);
          }
  });
});

//Delete Data
app.delete("/delete/:id",(req,resp)=>{
  dbConnect.query("DELETE FROM user where id=" +req.params.id,(err,result)=>{
    if(err)
      {
        console.log(err);
        }
        else
        {
          resp.send(result);
          }
  })
});
app.listen(8000);
