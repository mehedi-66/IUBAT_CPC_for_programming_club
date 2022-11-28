const express = require('express');

const route = express.Router();


 
 route.use("/notice", (req, res, next)=>{
    res.send('<h2>Hello from Notice </h2>');
}); 

module.exports = route;