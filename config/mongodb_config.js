const { MongoClient } = require("mongodb");
//const url = "mongodb://localhost:27017";
const url = "mongodb://127.0.0.1:27017";
const database = "node_tut_2024";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
  // let data = await collection.find({brand:"Apple"}).toArray();
  // console.log(data);
}
module.exports = dbConnect;