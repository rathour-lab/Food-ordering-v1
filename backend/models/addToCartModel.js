const mongoose =require( 'mongoose');

const OrderSchema = new mongoose.Schema(
  {
  cartItems: [
    {
      _id: String,
      name: String,
      description: String,
      price: Number,
      quantity: Number,
      image: String,
      category: String,
    },
  ],

  grandTotal: {
    type: Number,
    required: true,
  },

  orderStatus: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Preparing", "Out for Delivery", "Delivered"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports= mongoose.model("Order", OrderSchema);
