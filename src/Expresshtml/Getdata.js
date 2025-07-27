const express=require('express')// loading Express.js  Frame work in express variable
const routes=express.Router(); // loading router from express in the routes constant
const path=require("path")//loading path library to convert the file path to a universal supportable format
routes.get('/senddata',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","HTML Files","Getdata.html"))
}) 

routes.post('/senddata',(req,res,next)=>{
    console.log("Data from browser:",req.body);
    // res.send(`<p>Data Submitted: ${JSON.stringify(req.body)}</p>`);
    res.send(`<p>Data Submitted!!</p>`);
}) 

module.exports=routes;//To export the above routes to the main function App.js