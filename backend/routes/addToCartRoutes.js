const express=require("express");
const ATC_Route=express.Router();

const {getATC,addATC,rejectATC}=require('../controller/atcController')

ATC_Route.get('/get-order',getATC);
ATC_Route.post('/add-order',addATC);
ATC_Route.delete('/cancel-order/:id',rejectATC);

module.exports=ATC_Route