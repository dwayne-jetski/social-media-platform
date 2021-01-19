const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Joi = require('joi');


const profileData = new mongoose.Schema({
    posts: { default: [], type: String, minlength: 1, maxlength: 240 },
    aboutMe: { default: "", type: String, minlength: 1, maxlength: 800 },
    likedMusic: { default: [], type: String, minlength: 1, maxlength: 15 },
    dislikedMusic: { default: [], type: String, minlength: 1, maxlength: 15 },
    profilePic: { default: null, type: String}
});

const userInfo = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 1, maxlength: 15 },
    lastName: { type: String, required: true, minlength: 1, maxlength: 15 },
    eMail: { type: String, required: true, minlength: 1, maxlength: 25, unique: true },
    userName: { type: String, required: true, minlength: 8, maxlength: 15, unique: true },
    password: { type: String, required: true, minlength: 8, maxlength: 10 },
    profileInfo: [profileData]


});



const UserInfo = mongoose.model('UserInfo', userInfo);

function validateUserInfo(userInfo) {
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(15).required(),
        lastName: Joi.string().min(1).max(15).required(),
        email: Joi.string().min(1).max(15).required(),
        userName: Joi.string().min(8).max(15).required(),
        password: Joi.string().min(8).max(15).required(),
       
    });
    return schema.validate(userInfo);
}

exports.UserInfo = UserInfo;
exports.validate = validateUserInfo;
exports.userInfo = userInfo;


function validateProfileData(profileData) {
    const schema = Joi.object({
        posts: Joi.string().max(240).min(1).required(),
        likedMusic: Joi.string().min(1).max(15).required(),
        dislikedMusic: Joi.string().min(1).max(15).required(),

    });
    return schema.validate(profileData);
    }

exports.ProfileData = profileData;
exports.validate = validateProfileData;
exports.profileDataSchema = profileData;
module.exports = userInfo;