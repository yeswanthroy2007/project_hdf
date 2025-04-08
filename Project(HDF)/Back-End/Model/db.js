const mongoose=require('mongoose');
const connectDB= async (Mongo_urI)=>
{
     try {
            await mongoose.connect(Mongo_urI, { 
            });
            console.log("MongoDB Connected Successfully!");
        } catch(err)
        {
            console.log("not connected",err);
            process.exit(1); 
        }
}
module.exports={connectDB};