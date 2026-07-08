const express=require("express");
const websocket=require("ws");
const http=require('http')
const app=express();
const cors =require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config();
const foodCardDB =require('./config/db')
foodCardDB()
const foodMenuSchema=require('./models/foodModel')

const route=require('./routes/menuRoutes');
const ATC_Route=require('./routes/addToCartRoutes');
const admin_Route=require('./routes/adminRoutes');
const Reservation_Route=require('./routes/reservationRoutes');
app.use(route)
app.use(ATC_Route)
app.use(admin_Route)
app.use(Reservation_Route)
// websocket 

const server=http.createServer(app);
const wss=new websocket.Server({server})
wss.on('connection',(ws)=>{
    console.log('client connected');
    
        ws.on('message',(message)=>{
                console.log(message);
                
        })
})
server.listen(3000,()=>{
console.log('server Start');

});
