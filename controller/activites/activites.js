const express = require('express');


const User = require("../../model/user");


const route = express.Router();


 
 route.use("/activites", (req, res, next)=>{

    const page = `./Home/Activites.ejs`
    res.render(page , {title:"IUBAT CPC Activites", isAuth: req.session.isAuth});
}); 


module.exports = route;