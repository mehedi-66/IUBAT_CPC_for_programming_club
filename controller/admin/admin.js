const express = require('express');

//const User = require('../../model/User');

const route = express.Router();


 
 route.use("/admin", (req, res, next)=>{

    const page = `./Admin/admin.ejs`
    res.render(page , {title:"IUBAT CPC Admin"});
}); 

module.exports = route;