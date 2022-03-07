const express = require("express");
const app = express();
app.get("/root",function(req,res){
return res.send("Hello")
})
app.listen(5007,()=>{
    console.log("Listening on port 5000")
})