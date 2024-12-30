const dbConnect = require('../config/mongodb_config');

const updateData = async() =>{
    let db = await dbConnect();
    //console.log(db);
    // let result = await db.updateOne({name:"Iphone Pro"},{
    //     $set:{name:"Iphone 15 Pro",price:1099}
    // });
    let result = await db.updateMany({name:"Iphone Pro"},{
        $set:{name:"Iphone 15 Pro",price:1099}
    });
    if(result.acknowledged)
        console.log("Data updated");
    else
    console.log("Data not updated");
    console.warn(result);
    
}
updateData();