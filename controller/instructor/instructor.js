const express = require('express');

const route = express.Router();


 
 route.use("/", (req, res, next)=>{
    res.send('<h2>Hello from Instructor </h2>');
}); 

module.exports = route;