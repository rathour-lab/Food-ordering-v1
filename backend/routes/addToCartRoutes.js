const express=require("express");
const ATC_Route=express.Router();

const {getATC,getCartItem,deleteCartItem,AdminCartdata}=require('../controller/atcController')

ATC_Route.post('/get-order',getATC);
ATC_Route.get('/get-cartItem',getCartItem);
ATC_Route.delete('/delete-cartItem/:id',deleteCartItem);


ATC_Route.post('/postAdminCartData',AdminCartdata);


module.exports=ATC_Route