const mysqlDB = require("mysql");
const dbConnect = mysqlDB.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database: "mlm1925",
  database: "test_mlm",
});
// dbConnect.connect(function (err) {
//   if (err) {
//     console.error("error connecting:", err);
//   } else {
//     console.log("connected");
//   }
// });
module.exports = dbConnect;