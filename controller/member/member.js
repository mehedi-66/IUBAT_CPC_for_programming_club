const express = require('express');


const User = require("../../model/user");


const route = express.Router();


 
 route.use("/seniors", (req, res, next)=>{
    


    const page = `./Home/SeniorsProfile.ejs`
    res.render(page , {title:"IUBAT CPC Seniors", isAuth: req.session.isAuth});
}); 

route.use("/member", (req, res, next)=>{
    


    const page = `./Home/CurrentMember.ejs`
    res.render(page , {title:"IUBAT CPC Members", isAuth: req.session.isAuth});
}); 


module.exports = route;