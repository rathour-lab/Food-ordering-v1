const Order = require("../models/orderModel");
const Menu = require("../models/menuModel");
const Reservation = require("../models/reservationModel");

const getDashboard = async (req, res) => {

    try{

    }catch(err){
        res.status(500).json(err.message)
    }

}

module.exports={getDashboard}