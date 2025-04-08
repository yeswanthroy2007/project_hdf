const express= require('express');
const Router=express.Router();
const{addRide,findRide}=require('../Controller/RideController');
Router.post('/add', addRide);
Router.post('/find', findRide);
module.exports=Router;