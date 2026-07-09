const Reservation=require("../models/reservationModel");


// get Reservation data

async function getReservation(req,res) {
    const data = await Reservation.find();
    let count =await Reservation.countDocuments()
    res.json({data,count});
};

// post Reservation data

async function addReservation(req,res) {
    try {
        const data = await Reservation.create(req.body);
    res.json(data)
    } catch (error) {
        res.json({message:error.message})
    }
};

// dlt Reservation data

async function rejectReservation(res,req) {
  try {
      const id=req.params.id;
    await Reservation.findByIdAndDelete(id)
  } catch (error) {
       res.json({message:error.message})
  }
};

module.exports={getReservation,addReservation,rejectReservation}