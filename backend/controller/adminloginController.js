const JWT=require('jsonwebtoken')
async function controlLogin(req,res) {


const {name,email,password}=req.body;
const {EMAIL,PASSWORD}=process.env
    
    let token=JWT.sign(
        {id:PASSWORD,email:EMAIL},
        process.env.JWT_SECRET,
        {expiresIn:"10m"}
    )
    if (email==EMAIL && password==PASSWORD) {

            res.status(200).json({
            message:"login succesfull",
            token})
        
    }else{
        res.status(401).json({
            message:'wrong email and password'
        })
    }
    
}
module.exports={controlLogin}