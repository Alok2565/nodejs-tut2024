const express = require("express");
const app = express();
const dbConnect = require("./config/mysql_config");

app.use(express.json());
// app.get("/", (req, resp) => {
//   dbConnect.query("SELECT * FROM user", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       resp.send(result);
//     }
//     console.warn(result);
//   });
//   ///resp.send("Hello World");
// });

app.post("/", (req,resp) =>{
  const data = req.body;
  //let data = {email:"node@tect.com",password:123456,mobile:8882165415,address:"Noida",account:8952137,side:"right"};//Static Data
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
})

app.put('/update/:id',(req,resp)=>{
  //const data = ["Hari@test.com",'India#4312','right','8882165414','2'];
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
