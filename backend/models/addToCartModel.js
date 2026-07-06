const mongoose  = require('mongoose')

const addToCartSchema = new mongoose.Schema({
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports=mongoose.model('addToCartSchema',addToCartSchema)
