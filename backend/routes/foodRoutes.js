const express=require('express')

const route=express.Router();

const {getMenu,addItem,editItem,dltItem}=require('../controller/foodController')

route.get('/menu',getMenu);
route.post('/addMenu',addItem);
route.put('/updateMenu/:id',editItem);
route.delete('/removerMenu/:id',dltItem);

module.exports=route