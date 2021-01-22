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
app.use('/api/userInfo', userInfo);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server up and running on port: ${port} !`);
});

/* app.get("/api/userInfo/:id", (req, res) => {
    let id = req.params.id;
    let userInfo = repoContext.userInfo.findAllUserInfo();
    res.send(userInfo);
});

app.post("/api/userInfo", (req, res) => {
    let newUserInfo = req.body;
    let addedUserInfo = repoContext.userInfo.createUserInfo(newUserInfo);
    res.send(addedUserInfo);
});

app.put("/api/userInfo", (req, res) => {
    let userInfoToUpdate = req.body;
    let updatedUserInfo = repoContext.userInfo.updateUserInfo(userInfoToUpdate);
    res.send(updatedUserInfo);
});

app.delete("/api/userInfo/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.userInfo.deleteUserInfo(id);
    res.send(updatedDataSet);
});
 */
