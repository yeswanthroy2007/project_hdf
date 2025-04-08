const express= require('express');
const app= express();
const Router=require('./Routes/login.js');
const RideRouter=require('./Routes/RideRouter.js')
const {connectDB}=require('./Model/db.js');
const Mongo_urI='';// give your mongo url
const cors=require('cors');
app.use(cors());
app.use(express.json()); 
app.use('/user', Router);
app.use('/ride', RideRouter);
const start= async()=>
{
    try{
       await connectDB(Mongo_urI);
        app.listen(4000,()=>
            {
                console.log("server is running on port 4000");
            })
    }catch(err)
    {
        console.log('there was an error ',err);
    }
}
start();