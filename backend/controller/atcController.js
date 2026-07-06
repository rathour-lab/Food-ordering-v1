const atc=require("../models/addToCartModel");


// get atc data
async function getATC(req,res) {
    const data=await atc.find();
    res.json(data)
};

// post atc data

async function addATC(req,res) {
   try {
     const {menuId}=req.body
    const existingItem = await atc.findOne({ menuId });
    if (menuId) {
        res.json(existingItem);
    }
    else{
        res.json({
            message : "ADD "
        })
    }
   } catch (error) {
    res.json({
        message:error.message
    });
   }
};

// dlt atc data

async function rejectATC(req,res) {
    try {
        const id = req.params.id;
        await atc.findByIdAndDelete(id)
    } catch (error) {
        res.json({
        message:error.message
    });
    }
};

module.exports={getATC,addATC,rejectATC}