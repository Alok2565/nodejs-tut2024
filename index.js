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