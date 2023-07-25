const express = require("express");
const route = express.Router();
console.log("In route");

route.get("/hi",(req,res)=>{
    res.send("HI Users")
})
module.exports = route;