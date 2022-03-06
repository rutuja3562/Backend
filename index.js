const express = require("express");
// console.log(express);
const app = express();
// console.log(app);

app.get("/root",function (req,res){

res.send("Hello")
})


app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})