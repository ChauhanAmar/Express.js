const express=require("express");
const { read } = require("fs");
const app=express();

// app.get(route, callback)
// API 
// get- read
// post- create
// put- update 
// delete- delete

app.get("/", (req,res)=>{
    res.send("Hello World");

});
app.get("/About", (req,res)=>{
    res.send("Hello World About");

});
app.get("/Contact", (req,res)=>{
    res.send("Hello World Contact");

});

app.listen(8000, ()=>{
    console.log("listening server 8000");
});



//Dynamic website
const express=require("express");
const path=require("path");
const app=express();
const port=8000;

//built in middleware
//console.log(path.join(__dirname,"../public"));
const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.send("Hello World");

});
app.get("/About", (req,res)=>{
    res.send("Hello World About");

});
app.get("/Contact", (req,res)=>{
    res.send("Hello World Contact");

});

app.listen(8000, ()=>{
    console.log(`listening server ${port}`);
});
