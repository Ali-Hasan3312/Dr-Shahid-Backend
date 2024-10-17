import mongoose from "mongoose";
export const connectDB = async()=>{
  await  mongoose.connect(`${process.env.MONGODB_URI}`,{
        dbName: "Dr_Shahid_Mughal"
    })
    .then((c)=> console.log(`MongoDB Connected to ${c.connection.host}`))
    .catch((e)=> console.log(e))
}