// const app = require('./app');
// //console.log(app.z());

// const arr = [2,3,6,4,9,1,4,3];
// //console.log(arr[1]);

// let result = arr.filter((item) =>{
//     // return item >4
//     return item ===3
//     //return result
// });
// console.log(result);

//20-12-2024
const fs = require('fs');
fs.writeFileSync('hello.txt','code step by step');

const http = require('http')

function dataControll(req,resp){
    resp.write("<h2>Hello, This is Alok Singh</h2>");
    resp.end();
}
const dataControll = (req,resp)=>{
    resp.write("<h2>Hello, This is Alok Singh</h2>");
    resp.end();
}
http.createServer(dataControll).listen(8000);


http.createServer((req, resp) => {
    resp.write("<h2>Hello, This is Alok Singh</h2>");
    resp.end();
}).listen(8000);


//21-12-2024
const htpp = require('http');
 htpp.createServer((req, resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write(JSON.stringify([{name:"Alok Singh",email:"aloksingh@gmail.com"},
        {name:"Aasth Bharti",email:"bharti.17@gmail.com"},
        {name:"Anshika Bharti",email:"bharti.01@gmail.com"},
        {name:"Raja",email:"raja23@gmail.com"}]));
    resp.end();
 }).listen(4500);


const htpp = require('http');
const data = require('./data');
 htpp.createServer((req, resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
 }).listen(4500);



const fs = require('fs');
const input = process.argv;
if(input[2] == 'add')
{
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]);
}
else{
    console.log('invalid input');
}
//22-12-2024
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
//console.log(dirPath);
// for(i=1;i<=5;i++)
// {
//  fs.writeFileSync(dirPath+'/hello'+i+'.txt','This is simple file');   
// }
fs.readdir(dirPath,(err,files) => {
    files.forEach((item) => {
        console.log("File name is",item);
    })
    //console.warn(files);
})

//Crud with file
const fs = require('fs');
const path = require('path');
// const dirPath = path.join(__dirname,'files');
const filePath = `${dirPath}/apple.txt`;
//fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath,'utf8',(err,item) => {
//     console.log(item);
// });
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log('file is updated');
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) => {
//     if(!err) console.log('file is renamed');
// });
fs.unlinkSync(`${dirPath}/fruit.txt`,(err) =>{
    if(!err) console.log('file is deleted');
})

//23-12-2024

let a =20;
let b = 0;
let waitingData = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        // b=30;
        resolve(30);
    },2000);
});
waitingData.then((data) => {
    b = data;
    console.log(a+b);
});

//24-12-2024
console.log("Starting up...");

setTimeout(()=>{
    console.log("Two seconds have passed...");
},2000);

setTimeout(()=>{
    console.log("0 seconds have passed...");
},0)

console.log("Finishing up...")

//25-12-2024

app.get('/',(req,resp)=>{
    console.log("Data Sent by browser:-",req.query.name);
    resp.send('Welcome to ,'+req.query.name)
});
//25/12/2024
const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send('<h2>Welcome, This is Home Page</h2> <a href="/about">about</a>')
});
app.get('/about',(req,resp)=>{
    resp.send(`
        <input type="text" placeholder="UserName"/>
        <button>Click Here</button>`
    )
});
app.get('/contact',(req,resp)=>{
    //resp.send('Welcome, This is Contact page')
    resp.send([
        {
            name:'Alok',
            email:'aloksingh@gmail.com',
            password:'India'
        },
        {
            name:'Sam',
            email:'Sam@gmail.com',
            password:'India'
        }
    ])
})
app.listen(4500);
//26-12-2024
const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'public');

//app.use(express.static(publicPath));
app.get('/', (_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/about', (_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});
app.get('/contact', (_, resp)=>{
    resp.sendFile(`${publicPath}/contact.html`);
});
app.get('/*', (_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
});
app.listen(4500);

const express = require('express');
const path = require('path');

app.set('view engine','ejs');

app.get('/', (_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/profile',(_,resp) => {
    const user = {
        name:'Alok',
        email:'aloksingh@gmail.com',
        city:'Delhi'
    }
    resp.render('profile',{user});
})
app.get('/*', (_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
});
app.listen(4500)

//28-12-20024
const express = require("express");
const regFilter = require('./middleware');
const route = express.Router();
//app.use(regFilter);
route.use(regFilter);
app.get("/", (req, resp) => {
  resp.send("Welcom to home page");
});

app.get("/user", regFilter,(req, resp) => {
  resp.send("Welcom to user page");
});
route.get("/about", regFilter,(req, resp) => {
  resp.send("Welcom to About page");
});
route.get("/contact", regFilter,(req, resp) => {
  resp.send("Welcom to Contact page");
});
app.use('/',route);
app.listen(4500);

///
// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017";
// const database = "node_tut_2024";
// const client = new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("products");
//     let resp = await collection.find({}).toArray();
//     console.log(resp);
// }
// getData();

const { MongoClient } = require('mongodb');
//const url = "mongodb://localhost:27017";
const url = "mongodb://127.0.0.1:27017";
const database = "node_tut_2024";
const client = new MongoClient(url);

async function getData() {
    try {
        console.log("Connecting to the database...");
        let result = await client.connect();
        console.log("Database connected successfully!");

        let db = result.db(database);
        let collection = db.collection("products");

        console.log("Fetching data from the 'products' collection...");
        let resp = await collection.find({}).toArray();

        console.log("Data retrieved successfully:");
        console.log(resp);
    } catch (error) {
        console.error("Error connecting to the database or fetching data:", error);
    } finally {
        await client.close();
        console.log("Database connection closed.");
    }
}

getData();
//29-12-2024

const { MongoClient } = require("mongodb");
//const url = "mongodb://localhost:27017";
// const url = "mongodb://127.0.0.1:27017";
// const database = "node_tut_2024";
// const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
  // let data = await collection.find({brand:"Apple"}).toArray();
  // console.log(data);
}
//console.warn(dbConnect());

// dbConnect().then((resp) => {
//   resp.find().toArray().then((data) => {
//       console.log(data);
//     });
// });
const main = async () =>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);

}
main();

//30-12-2024 CRUD with Mongoose

const mongoose= require("mongoose");



  mongoose.connect("mongodb://127.0.0.1:27017/node_tut_2024");
  const ProductSchema = new mongoose.Schema({
      name: String,
      brand: String,
      price: Number,
      category:String
    });
// const ProductsModel = mongoose.model("products", ProductSchema);
// const savInDB = async () =>{
//      const ProductsModel = mongoose.model("products", ProductSchema);
//     let data = new ProductsModel({name:"nord 20",brand:"Realme",price:999,category:"mobile"});
//     let result = await data.save();
//     console.log(result);
// }
// savInDB();

// const updateInDB = async () => {
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   const result = await ProductsModel.updateOne(
//     { name: "nord 20" },
//     { $set: { price: 890 } }
//   );
//   console.log("Update result:", result);
// };
// updateInDB();

// const deleteInDB = async () =>{
//       const ProductsModel = mongoose.model("products", ProductSchema);
//       const result = await ProductsModel.deleteOne({name:"moto m20"});
//       console.log(result);

// }
//deleteInDB();
const findInDB = async () =>{
  const ProductsModel = mongoose.model("products", ProductSchema);
  const result = await ProductsModel.find({name:"nord 20"});
  console.log(result);

}
findInDB();

//CRUD WITH Mongoose

const express = require('express');
require("./config/mongoose_config");

const Product = require("./products");

// const app = express();
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
});

//search 
const express = require('express');
require("./config/mongoose_config");

const Product = require("./products");


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
app.listen(8000);

//Uploads

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

//OS module
const os =require('os');
//console.log(os.arch());
//console.log(os.freemem()/(1024*1024*1024));
//console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.platform());
console.log(os.userInfo());

//API HIT Count 
const express = require('express');
const EventEmitter = require('events'); //EventEmitter is a calss


const event = new EventEmitter();
let count = 0;
event.on('CountAPI', () => {
    //count++;
      console.log("Event Called",count++);
    });
app.get("/", (req,resp) =>{
    resp.send("API called");
    event.emit("CountAPI");
});
app.get("/search", (req,resp) =>{
    resp.send("Search API called");
    event.emit("CountAPI");
});
app.get("/update", (req,resp) =>{
    resp.send("Update API called");
    event.emit("CountAPI")
});

app.listen(8000);



