const connectDB = require('./startup/db');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const passport = require('passport');


const userInfo = require('./routes/userInfos');    

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: false
    })
);
app.use(bodyParser.json);
//Passport Middleware
app.use(passport.initialize());
//Pasport confing
require("./config/passport") (passport);

app.use('/api/userInfo', userInfo);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

app.get("/api/userInfo/:id", (req, res) => {
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

