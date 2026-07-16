const OrderModel = require("../models/addToCartModel");
const CartModel = require("../models/cartModel");

async function getATC(req, res) {
    try {
        const {userId,item} = req.body;
        console.log(userId,item);
        
        

        const alreadyExists = await CartModel.findOne({
            userId,
            'item._id':item._id

        });

        if (alreadyExists) {
            alreadyExists.item.quantity += 1;
            await alreadyExists.save();

            return res.json({
                message: "Quantity Updated",
                data: alreadyExists,
            });
        }

        const cartItem = await CartModel.create({
            userId,
            item});

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
            let {userId}=req.params;
        const cart = await CartModel.find({userId});
            
            // if (cart.userId==CompareUserId) {
            //     res.json(cart.item)
            //     console.log(cart.item);
                
            // }
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
             {
                "item.quantity": quantity,
            },
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
          
        const {userId}=req.body;
  
    
        const cartItems = await CartModel.find({userId});

        if (cartItems.length === 0) {
            return res.status(400).json({
                message: "Cart is empty",   
            });
        }

        const grandTotal = cartItems.reduce((total, cart) => {
            return total + cart.item.price * cart.item.quantity;
        }, 0);
            let orderItems=cartItems.map(cart=>cart.item)
        await OrderModel.create({
            userId,
            cartItems:orderItems,
            grandTotal,
        });

        await CartModel.deleteMany({userId});

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
        let count=data.length;

        res.json({data,count});
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

// update oreder status

async function updateOrderStatus(req,res) {
    try {
        const {id} = req.params;
        const {orderStatus} = req.body
        
        const data = await OrderModel.findByIdAndUpdate(
            id,
            {orderStatus},
            {new : true}
        );
        res.json(data)
        
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports = {
    getATC,
    getCartItem,
    deleteCartItem,
    AdminCartdata,
    getAdminCartdata,
    updateCartQuantity,
    updateOrderStatus
};