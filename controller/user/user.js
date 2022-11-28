const express = require('express');

const User = require('../../model/User');

const route = express.Router();


/* 
 route.use("/user", (req, res, next)=>{

    
    User.getAll().then(([data, fieldData]) =>{
       
        console.log(data);
     })
     .catch((err)=>{
         console.log(err);
       });

    res.send('<h2>Hello from User </h2>');
}); 

*/


route.use("/login", (req, res, next)=>{

    const page = `./User/login.ejs`
    res.render(page , {title:"Login Page"});
    
}); 

route.use("/register", (req, res, next)=>{

    const page = `./User/register.ejs`
    res.render(page , {title:"Login Page"});
    
}); 



module.exports = route;