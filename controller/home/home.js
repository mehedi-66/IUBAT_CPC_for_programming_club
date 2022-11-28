const express = require('express');
const path = require('path');



const route = express.Router();


 
 route.use("/", (req, res, next)=>{
    //res.sendFile(path.join(__dirname, '../..',  'views/Home', 'index.html'));
  

    const page = `./Home/index.ejs`
    res.render(page , {title:"IUBAT CPC"});
}); 

module.exports = route;