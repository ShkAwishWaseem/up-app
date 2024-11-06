import mongoose from "mongoose";

async function dbConnection (){
     return await mongoose.connect("mongodb+srv://awish1:Awish7155@cluster0.05gdfsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     // return await mongoose.connect("mongodb+srv://awishwaseem7:bZKZlZ7dSdifLcai@cluster0.05gdfsr.mongodb.net/?retryWrites=true&w=majority")
}



export default dbConnection ;