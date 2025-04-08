const { json } = require('express');
const Signup=require('../Model/UserData.js');
const bcrypt=require('bcrypt');
const signup= async(req,res)=>
{
    if (!req.body.username || !req.body.password ||!req.body.email) {
        return res.status(400).json({ error: "Username, password and email are required!" });
    }
    const {username,email}=req.body;
    const existingUser=  await Signup.findOne({$or:[{username},{email}]});
    if(existingUser)
    {
        return res.status(400).json({message:"user already exists"});
    }
    try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const data= await Signup.create(
        {
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        }
    );
    console.log(data);
    res.status(200).json(data);
}catch(err)
{
    console.log("there was an error",err);
}
}
const login=async(req,res)=>
{
    if(!req.body.username||!req.body.password)
    {
        return res.status(400).json({message:"Username and password id required"});
    }
    try{
        const {username,password}=req.body;
        const user= await Signup.findOne({username});
        if(!user)
   
            {
          return  res.status(404).json({message:"user not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
           return res.status(404).json({message:"password is wrong"});
        }
        res.status(200).json({ message: "Login successful", user });
    }catch(error){
        res.status(500).json({ message: "Server error", error });
    }
}
module.exports={login,signup};