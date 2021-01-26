const connectDB = require('./startup/db');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userInfo = require('./routes/userInfos');   
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//connect to MongoDB
connectDB();

//Passport Middleware
app.use(passport.initialize());

//Pasport confing
require("./config/passport") (passport);

//routes
app.use('/api/users', userInfo);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server up and running on port: ${port} !`);
});
