const dbConnect = require('./config/mongodb_config');

const main = async () =>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);

}
main();