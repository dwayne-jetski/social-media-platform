const connectDB = require('./startup/db');
const express = require('express');
const app = express();


const userInfos = require('./routes/userInfos');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/userInfos', userInfo);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started on port: ${port}');
});


app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
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
    res.send(updateUserInfo);
});

app.delete("/api/userInfo/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.userInfo.deleteUserInfo(id);
    res.send(updatedDataSet);
});

