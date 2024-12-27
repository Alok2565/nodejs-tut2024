const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');


const publicPath = path.join(__dirname,'public');
app.get('/', (_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/profile',(_,resp) => {
    const user = {
        name:'Alok',
        email:'aloksingh@gmail.com',
        city:'Delhi',
        skills:['php','javascript','JS','node']
    }
    resp.render('profile',{user});
})
app.get('/login',(_,resp) => {
    resp.render('login');
})
app.get('/*', (_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
});
app.listen(4500)