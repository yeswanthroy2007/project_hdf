const express= require('express');
const Router=express.Router();
const {login,signup}=require('../Controller/UserController')
Router.route('/login').post(login);
Router.route('/signup').post(signup);
module.exports=Router;