const atc = require("../models/addToCartModel");


// get atc data
let CartData=[];
async function getATC(req, res) {
    let data = req.body;
    CartData.push(data);
    
    
    res.json({
        data:data,
        message:'cart item added'
    })
    console.log(data);
    
};
// post atc data

async function getCartItem(req,res) {
    CartData.map((id)=>{
        console.log(id._id);
        
    })
    res.json(CartData)
    
}
async function addATC(req, res) {
    try {
        const { menuId } = req.body
        const existingItem = await atc.findOne({ menuId });
        if (menuId) {
            res.json(existingItem);
        }
        else {
            res.json({
                message: "ADD "
            })
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};

// dlt atc data

async function rejectATC(req, res) {
    try {
        const id = req.params.id;
        await atc.findByIdAndDelete(id)
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};

module.exports = { getATC, addATC, rejectATC,getCartItem }