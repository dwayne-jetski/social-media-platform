const mongoose = require('mongoose');
const config = require('config');

const db = require("../config/keys").mongoURI;

function connectDB() {
    mongoose.connect(
        db,
            { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('Connected to MongoDB...'))
        .catch((err)=> {
            console.log(`Could not connect to MongoDB. Error: ${err}`);
        process.exit(1)
        });
}

module.exports = connectDB;