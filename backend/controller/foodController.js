const menuData=require('../models/foodModel');

// get Menu items
async function getMenu(req,res) {
    const data = await menuData.find();
    res.json(data);
};

// post Menu items

async function addItem(req,res) {
    try {
        const data = await menuData.create(req.body);
        res.json(data)
        
    } catch (error) {
        res.json({message:error.message})
    }
};

// edit Menu item

async function editItem(req,res) {
    try {
        const id=req.params.id;
        const data=await menuData.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        res.status(200).json({
            message:'iten update sucessfully!!',
            data
        })
    } catch (error) {
        res.json({message:error.message})
    }
};

// dlt Menu item

async function dltItem(req,res) {
  try {
      const id=req.params.id;
    const data= await menuData.findByIdAndDelete(id);
  } catch (error) {
    res.json({message:error.message})
  }
};

module.exports={getMenu,addItem,editItem,dltItem}