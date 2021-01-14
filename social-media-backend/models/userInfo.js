const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userInfoSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 1, maxlength: 15 },
    lastName: { type: String, required: true, minlength: 1, maxlength: 15 },
    eMail: { type: String, required: true, minlength: 1, maxlength: 25, unique: true },
    userName: { type: String, required: true, minlength: 8, maxlength: 15, unique: true },
    password: { type: String, required: true, minlength: 8, maxlength: 10 },
    profileInfo: { profileDate }


})

const profileDate = new mongoose.Schema({
    posts: { default: [], type: String, minlength: 1, maxlength: 240 },
    aboutMe: { default: "", type: String, minlength: 1, maxlength: 800 },
    likedMusic: { default: [], type: String, minlength: 1, maxlength: 15 },
    dislikedMusic: { default: [], type: String, minlength: 1, maxlength: 15 },
    profilePic: { default: null}
})


const userInfo = mongoose.model('userInfo', userInfoSchema);

module.exports = userInfo;