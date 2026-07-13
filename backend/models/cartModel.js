const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    price: Number,
    quantity: {
        type: Number,
        default: 1,
    },
    image: String,
    category: String,
});

module.exports = mongoose.model("Cart", CartSchema);