const Menu = require("../models/foodModel");

// get Menu items (for frontend to show all cards)
async function getMenu(req,res) {
    const data = await Menu.find();
    res.json(data);
};

// get menu item by id (for add spacific food item to cart by food id)

// async function getItemId(req, res) {
//   try {
//     const { id } = req.params;
//     const item = await Menu.findById(id);
//     if (!item) {
//       return res.status(404).json({
//         message: "Item not found",
//       });
//     }
//     res.status(200).json(item);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// async function addItemId(req, res) {
//   try {
//     const { menuId } = req.body;
//     const item = await Menu.findById(menuId);
//     res.json(item);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// post Menu items (for post new food item  )

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
    const data= await Menu.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    res.json({message:error.message})
  }
};

module.exports={getMenu,addItem,editItem,dltItem}