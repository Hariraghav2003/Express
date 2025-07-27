const express=require('express')// loading Express.js  Frame work in express variable
const routes=express.Router(); // loading router from express in the routes constant
routes.get('/senddata',(req,res,next)=>{
    res.send('<form action="/getdata" method="POST"> <label>Enter the data</label> <input type="text" name="data" ></input> <input type="submit" value="submit"></input>  </form>'); 

}) 

routes.post('/getdata',(req,res,next)=>{
    console.log("Data from browser:",req.body);
    // res.send(`<p>Data Submitted: ${JSON.stringify(req.body)}</p>`);
    res.send(`<p>Data Submitted!!</p>`);
}) 

module.exports=routes;//To export the above routes to the main function App.js