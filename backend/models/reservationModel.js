const mongoose=require('mongoose');

const resevationSchema=mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
     gnail:{
        type:String,
        required:true
    },
    total_person:{
        type:Number,
        required:true
    },
    entry_time:{
        type:Number,
        required:true
    },
    exit_time:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('resevationSchema',resevationSchema);