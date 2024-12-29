const dbConnect = require('./config/mongodb_config');
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