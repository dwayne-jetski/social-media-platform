const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const userInfos = require('./routes/userInfos');

connectDB();

app.use(express.json());
app.use('/api/userInfos', userInfo);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(Server started on port: ${port}');
});


app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});

app.get("/api/userInfo", (req, res) => {
    let userInfo = repoContext.userInfo.findAllUserInfo();
    res.send(userInfo);
});

