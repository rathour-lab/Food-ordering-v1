const OrderModel = require("../models/addToCartModel");
const CartModel = require("../models/cartModel");

async function getATC(req, res) {
    try {
        const item = req.body;

        const alreadyExists = await CartModel.findById(item._id);

        if (alreadyExists) {
            alreadyExists.quantity += 1;
            await alreadyExists.save();

            return res.json({
                message: "Quantity Updated",
                data: alreadyExists,
            });
        }

        const cartItem = await CartModel.create(item);

        res.json({
            message: "Item Added",
            data: cartItem,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
// post atc data

async function getCartItem(req, res) {
    try {

        const cart = await CartModel.find();

        res.json(cart);

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }
}

// dlt atc data
async function deleteCartItem(req, res) {

    try {

        await CartModel.findByIdAndDelete(req.params.id);

        const cart = await CartModel.find();

        res.json({
            message: "Deleted Successfully",
            data: cart,
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

}

// 
async function updateCartQuantity(req, res) {
    try {

        const { quantity } = req.body;

        const updatedItem = await CartModel.findByIdAndUpdate(
            req.params.id,
            { quantity },
            { new: true }
        );

        res.json({
            message: "Quantity Updated",
            data: updatedItem,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}


async function AdminCartdata(req, res) { //post cart data to the orders schema
    try {

        const cartItems = await CartModel.find();

        if (cartItems.length === 0) {
            return res.status(400).json({
                message: "Cart is empty",
            });
        }

        const grandTotal = cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);

        await OrderModel.create({
            cartItems,
            grandTotal,
        });

        await CartModel.deleteMany({});

        res.json({
            message: "Order placed successfully",
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }
}
async function getAdminCartdata(req, res) {
    try {
        const data = await OrderModel.find().sort({ createdAt: -1 });
        let count=await OrderModel.countDocuments()

        res.json({data,count});
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = {
    getATC,
    getCartItem,
    deleteCartItem,
    AdminCartdata,
    getAdminCartdata,
    updateCartQuantity
};