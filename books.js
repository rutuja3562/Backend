const express = require("express");
// console.log(express);
const app = express();


app.get("/books",function(req,res){
    return res.send(
        [{bookname:"Wings of Fire",
author:"A.P.J.Abdul Kalam"},
    {bookname:"War and Peace",
author:"Tolstoy"}, 
{
    bookname:"The Great Tech Game",
    author:"Anirudh Suri",
},
{
bookname:"The Founders: The Story of Paypal",
author:"Jimmy Sony"
}
]
);
})

app.listen(4000,()=>{
    console.log("Listening on port 4000")
})

