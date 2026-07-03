const mongoose=require("mongoose");

async function foodCardDB(){
    try {
        await mongoose.connect(process.env.URI)
        console.log(mongoose.connection.name);
    console.log("Database Connected");
    
    } catch (error) {
        
        
        console.log('from DB',error);
        
        
    }
}
module.exports = foodCardDB