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