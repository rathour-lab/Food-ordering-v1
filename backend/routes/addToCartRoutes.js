const express=require("express");
const ATC_Route=express.Router();

route.get('/get-order',getReservation);
route.post('/add-order',addReservation);
route.delete('/cancel-order',rejectReservation);

module.exports=ATC_Route