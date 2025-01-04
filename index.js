const express = require('express');
require("./config/mongoose_config");

const Product = require("./products");

const app = express();
app.use(express.json());

app.post("/create", async(req, resp) =>{
  const product = new Product(req.body);
  let result = await product.save();
  //console.log(result);
  resp.send({result:result});
});

app.get("/list", async(req, resp) =>{
  let result = await Product.find();
  resp.send(result);
});

app.delete("/delete/:_id", async(req, resp) =>{
  let result = await Product.deleteOne(req.params);
  resp.send(result);
})
app.put("/update/:_id", async(req, resp) =>{
  let result = await Product.updateOne(
    req.params,
    {
      $set:req.body
    }
  );
  resp.send(result);
})
app.listen(8000);