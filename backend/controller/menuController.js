const Menu = require("../models/MenuModel");

// get Menu items (for frontend to show all cards)
async function getMenu(req,res) {
    const data = await Menu.find();
    let count = await Menu.countDocuments()
    res.json({data,count});
};

async function addItem(req,res) {
    try {
        const data = await Menu.create(req.body);
        res.json(data)
        
        
    } catch (error) {
        res.json({message:error.message})
    }
};

// edit Menu item (for update da existing food card)

async function editItem(req,res) {
    try {
        const id=req.params.id;
        const data=await Menu.findByIdAndUpdate(
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

// dlt Menu item (for remove the existing food item )

async function dltItem(req,res) {
  try {
    
      const id=req.params.id;
    console.log(id);
    
      await Menu.findByIdAndDelete(id);
    
  } catch (error) {
    res.json({message:error.message})
  }
};

module.exports={getMenu,addItem,editItem,dltItem}