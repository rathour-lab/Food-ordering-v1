const express=require("express");
const admin_Route=express.Router();

admin_Route.post('/signup',signup);
admin_Route.post('/login',login);

module.exports=admin_Route