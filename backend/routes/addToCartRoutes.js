const express=require("express");
const ATC_Route=express.Router();

const {getATC,addATC,rejectATC,getCartItem}=require('../controller/atcController')

ATC_Route.post('/get-order',getATC);
ATC_Route.get('/get-cartItem',getCartItem);
ATC_Route.post('/add-order',addATC);

module.exports=ATC_Route