const express = require('express');


const User = require("../../model/user");


const route = express.Router();


 
 route.use("/notice", (req, res, next)=>{

    const page = `./Home/Notice.ejs`
    res.render(page , {title:"IUBAT CPC Activites", isAuth: req.session.isAuth});
}); 

 
route.use("/event", (req, res, next)=>{

    const page = `./Home/Event.ejs`
    res.render(page , {title:"IUBAT CPC Activites", isAuth: req.session.isAuth});
}); 


module.exports = route;