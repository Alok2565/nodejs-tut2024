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
