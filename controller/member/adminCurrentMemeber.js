const express = require('express');
const multer = require('multer');
const fs = require('fs');

const CurrentMember = require('../../model/currentMember');

//const User = require('../../model/User');

const route = express.Router();

const fileStorageEngine = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null, "./static/img");
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
});


const upload = multer({storage : fileStorageEngine });




 route.use("/adminCurrentMember", (req, res, next)=>{

     
    CurrentMember.getAll()
    .then(([data, fieldData]) => {
      //console.log(data);

      const page = `./Admin/member/currentMember/adminCurrentMember.ejs`
      
      res.render(page , {title:"IUBAT Current  Members",  data: data});
      
    })
    .catch((err) => {
      console.log(err);
    });

}); 

 
route.use("/adminCurrentMemberCreate", (req, res, next)=>{

    const page = `./Admin/member/currentMember/create.ejs`
    res.render(page , {title:"IUBAT Senior Members"});
}); 



route.use("/adminCurrentMemberCreatePost", upload.single('image'), (req, res, next)=>{

    console.log(req.file);

    let savedata = ()=>{
        
    let image = req.file.path;
    let name = req.body.name;
    let email = req.body.email;
    let position = req.body.position;

   

    const currentMember = new CurrentMember(null, name, email, image, position);
   
    currentMember.save()
      .then(()=>{
         
          res.redirect('/adminCurrentMember');
      })
      .catch(err =>{
        console.error(err);
      });

    }

    savedata();

}); 

module.exports = route;