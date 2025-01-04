const mongoose= require("mongoose");



  mongoose.connect("mongodb://127.0.0.1:27017/node_tut_2024");
  const ProductSchema = new mongoose.Schema({
      name: String,
      brand: String,
      price: Number,
      category:String
    });
// const ProductsModel = mongoose.model("products", ProductSchema);
// const savInDB = async () =>{
//      const ProductsModel = mongoose.model("products", ProductSchema);
//     let data = new ProductsModel({name:"nord 20",brand:"Realme",price:999,category:"mobile"});
//     let result = await data.save();
//     console.log(result);
// }
// savInDB();

// const updateInDB = async () => {
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   const result = await ProductsModel.updateOne(
//     { name: "nord 20" },
//     { $set: { price: 890 } }
//   );
//   console.log("Update result:", result);
// };
// updateInDB();

// const deleteInDB = async () =>{
//       const ProductsModel = mongoose.model("products", ProductSchema);
//       const result = await ProductsModel.deleteOne({name:"moto m20"});
//       console.log(result);

// }
//deleteInDB();
const findInDB = async () =>{
  const ProductsModel = mongoose.model("products", ProductSchema);
  const result = await ProductsModel.find({name:"nord 20"});
  console.log(result);

}
findInDB();


