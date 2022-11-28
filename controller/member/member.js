const express = require('express');

const route = express.Router();


 
 route.use("/member", (req, res, next)=>{
    res.send('<h2>Hello from Member </h2>');
}); 

module.exports = route;