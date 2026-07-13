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



async function updateReservation(req, res) {
  try {
    let {id} = req.params;
    let {state} = req.body;
    
    const reservation = await Reservation.findByIdAndUpdate(
        id,
        {state},
        {new:true}
    );
    res.json({
  message: "Reservation Updated",
  reservation
});
  } catch (error) {
    res.json({message:error.message})
  }
};

module.exports={getReservation,addReservation,updateReservation}