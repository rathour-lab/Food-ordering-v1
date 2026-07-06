const express=require('express')

const route=express.Router();

const {getMenu,addItem,editItem,dltItem,addItemId,getItemId}=require('../controller/foodController')

route.get('/menu',getMenu);
route.get('/menu/:id',getItemId) // for add to cart to get singal item  campare with menu 
route.post('/menuid',addItemId)//// for store item id to campare the menu 
route.post('/addMenu',addItem);
route.put('/updateMenu/:id',editItem);
route.delete('/removerMenu/:id',dltItem);

module.exports=route