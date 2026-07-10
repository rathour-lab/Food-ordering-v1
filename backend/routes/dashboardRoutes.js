const express = require('express');
const db_route=express.Router();

const {getDashboard} = require("../controllers/dashboardController");

db_route.get("/", getDashboard);

module.exports=db_route