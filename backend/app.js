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
const foodMenuSchema=require('./models/MenuModel')

const route=require('./routes/menuRoutes');
const ATC_Route=require('./routes/addToCartRoutes');
const admin_Route=require('./routes/adminRoutes');
const Reservation_Route=require('./routes/reservationRoutes');
const revenue=require("./routes/dashboardRoutes")
const category=require("./routes/categoryRoutes")
app.use(route)
app.use(ATC_Route)
app.use(admin_Route)
app.use(Reservation_Route)
app.use(revenue)
app.use(category)

// websocket 

const server=http.createServer(app);
const wss=new websocket.Server({server})
wss.on('connection',(ws)=>{
    console.log('client connected');
    
        ws.on('message',(message)=>{
                 let msg=JSON.parse(message.toString());
                console.log(msg);
                
               ws.send(msg)

                
        })
})
server.listen(3000,()=>{
console.log('server Start');

});
