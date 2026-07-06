const express=require("express");
const Reservation_Route=express.Router();

const {getReservation,addReservation,rejectReservation}=require("../controller/reservationController")

Reservation_Route.get('/get-Reservation',getReservation);
Reservation_Route.post('/add-Reservation',addReservation);
Reservation_Route.delete('/cancel-Reservation',rejectReservation);

module.exports=Reservation_Route