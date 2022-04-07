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