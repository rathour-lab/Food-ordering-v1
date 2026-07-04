const mongoose  = require('mongoose')

const addToCartSchema=mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
     image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
    }
});

module.exports=mongoose.model('addToCartSchema',addToCartSchema)
