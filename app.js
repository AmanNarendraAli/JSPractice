const express = require("express")
const app = express();
const route = require("../route");
//  function add(){
//     let a=10;
//     let b=6;
//     let c=a+b;
//     return(c)
// }

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",route)

// app.use("/add",(req,res)=>{
//     let c= add;
//     res.send("Addition of two number is:",c)
// })
app.listen(3000,"Working at port 3000")