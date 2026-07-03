const express=require("express");
const app=express();
const cors =require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config();
const foodCardDB =require('./config/db')
foodCardDB()

const foodMenuSchema=require('./models/foodModel')

const route=require('./routes/foodRoutes');
app.use(route)

app.listen(3000,()=>{
console.log('server Start');

});