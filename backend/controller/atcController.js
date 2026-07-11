const OrderModel=require('../models/addToCartModel')

// get atc data
let CartData=[];
let AdminCartData=[];
async function getATC(req, res) {
    let data = req.body;
    CartData.push(data);

    
    
    res.json({
        data:data,
        message:'cart item added'
    })
  
    
};
// post atc data

async function getCartItem(req,res) {
    
    res.json(CartData)
    
}

// dlt atc data
async function deleteCartItem(req,res) {
    
    let dltitemId=req.params.id;
   
    CartData= CartData.filter((item)=>{
        return item._id!=dltitemId
    })
    
    res.json(
        {
            data:CartData,
            message:'item Deleted Succesfull'
        }
    )
    
    
}

async function AdminCartdata(req,res) {
    AdminCartData =req.body
    
    await OrderModel.create(req.body)
    CartData = [];
    res.json({
        message:'cartitem added ',
        AdminCartData
    })
    
}
async function getAdminCartdata(req,res) {
    res.json(AdminCartData)
}

module.exports = { getATC,getCartItem,deleteCartItem,AdminCartdata,getAdminCartdata }