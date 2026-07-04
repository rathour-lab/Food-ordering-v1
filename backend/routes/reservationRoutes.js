const express=require("express");
const Reservation_Route=express.Router();

route.get('/get-Reservation',getReservation);
route.post('/add-Reservation',addReservation);
route.delete('/cancel-Reservation',rejectReservation);

module.exports=Reservation_Route