const express = require('express');
require("./config/mongoose_config");

const Product = require("./products");

const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get("/search/:key", async(req,resp) =>{
  const key = req.params.key;
  console.log(key)
  let product = await Product.find(
    {
      $or: [{"name":{$regex:key}},{"brand":{$regex:key}},{"category":{$regex:key}}]
    }
  )
  resp.send(product);
});

const uploadFolder = 'uploads/';
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}
const upload = multer({
  storage:multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + "_" + Date.now() +".jpg",".jpeg");
    }
  })
}).single("user_file");
app.post("/upload", upload, (req,resp) =>{
  resp.send("file uploaded");
});
app.listen(8000);
app.listen(8000);