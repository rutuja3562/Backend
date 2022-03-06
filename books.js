const express = require("express");
 console.log(express)
const app = express();
 console.log(app)
app.get("/books",(req,res)=>{
// console.log("books");
return res.send(
// {book1:"wings of fire",
// book2:"Gilead",
// book3:"The Handmadid's Tale",
// book4: "Infinite Jest"
// }

    [
        {"bookname":"wings of fire",
    "author":"A.P.J. Abdul Kalam"},

    {
    "bookname":"Gilead",
    "author":"Marilynne Robinson",
},

{
    "bookname":"Infinite Jest",
    "author":"David Foster Wallace",
},

{
    "bookname":"The Handmadid's Tale",
    "author":"Margaret Atwood",
}

] 

)   
})

app.listen(4000,()=>{
    console.log("listening on port 4000")
}) 