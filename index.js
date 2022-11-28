const http = require('http');
const path = require('path');  
const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.set('view engine', 'ejs');  // EJS engine 

app.use(bodyParser.urlencoded({extended: false}));

app.use('/static',express.static(__dirname + '/static'));  // public static file


// Route different folder wise partitioning

// User Side
const problem = require('./controller/problem/problem'); 
const home = require('./controller/home/home'); 

// Admin Side
const admin = require('./controller/admin/admin'); 
const adminProblem = require('./controller/problem/adminProblem');
const user = require('./controller/user/user');




// route folder route located here

app.use(user);
app.use(problem);
app.use(admin);
app.use(adminProblem);
app.use(home);


app.use((req, res)=>{
    res.send("Home Page Here");
});




const server = http.createServer(app);

server.listen(3000);