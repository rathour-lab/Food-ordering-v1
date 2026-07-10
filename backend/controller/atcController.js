const atc = require("../models/addToCartModel");


// get atc data
let CartData=[];
let AdminCartData=[];
async function getATC(req, res) {
    let data = req.body;
    CartData.push(data);
    console.log(data.quantity);
    
    
    res.json({
        data:data,
        message:'cart item added'
    })
    console.log(data);
    
};
// post atc data

async function getCartItem(req,res) {
    CartData.map((id)=>{
       
        
    })
    res.json(CartData)
    
}

// dlt atc data
async function deleteCartItem(req,res) {
    
    let dltitemId=req.params.id;
   
    CartData= CartData.filter((item)=>{
        return item._id!=dltitemId
    })
    console.log(CartData);
    res.json(
        {
            data:CartData,
            message:'item Deleted Succesfully'
        }
    )
    
    
}
async function getAdminCartdata(req,res) {
    res.json(AdminCartData)
}
async function AdminCartdata(req,res) {
    AdminCartData =req.body
  
    
}


module.exports = { getATC,getCartItem,deleteCartItem,AdminCartdata,getAdminCartdata }