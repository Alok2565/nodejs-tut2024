const express = require("express");
const dbConnect = require("./config/mongodb_config");
const app = express();
const mongondb = require('mongodb');

app.use(express.json()); //Middleaware

app.get("/", async(req, resp) => {
    let dbData = await dbConnect();
    dbData = await dbData.find().toArray();
    //console.log(dbConn);
    resp.send(dbData);
});
app.post("/", async (req,resp) => {
    let dbData = await dbConnect();
    let result = await dbData.insertOne(req.body)
    resp.send(result);
});

app.put("/:name", async(req,resp) => {
    let dbData = await dbConnect();
    let result = await dbData.updateOne({name:req.params.name}, {$set:req.body});
    console.warn(result);
    resp.send({result:"updated"});
});

app.delete("/:id", async(req,resp) => {
    let dbData = await dbConnect();
    let result = await dbData.deleteOne({_id: new mongondb.ObjectId(req.params.id)});//Mongodb instens
    resp.send({result:result});
})
app.listen(8000);
 