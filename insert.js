const dbConnect = require('./config/mongodb_config');

const insert = async () =>{
    const db = await dbConnect();
    //console.log(db);
    const result = await db.insertMany(
         [
            {name: 'infinix 5G',brand:'Infinix',price: 579,category:'mobile'},
            {name: 'moto m20',brand:'Motorolla',price: 779,category:'mobile'},
            {name: 'micro m60',brand:'Micromax',price: 499,category:'mobile'},
         ]
);
    if(result.acknowledged)
    {
        console.log('data inserted');
    }else{
        console.log('data not inserted');
    }
   
}
insert();