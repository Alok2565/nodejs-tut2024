const dbConnect = require('../config/mongodb_config');
const deleteData = async () =>{
    const db = await dbConnect();
    let result = await db.deleteMany({name:"micro m60"});
    console.warn(result);
    if(result.acknowledged)
        console.log("Data deleted");
    else
    console.log("Data not deleted");
}
deleteData();