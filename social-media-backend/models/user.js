const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');
const jwt = require('jsonwebtoken');
const {commentSchema} = require('./comment');
/* const { productSchema } = require('./product'); */

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 1, maxlength: 15 },
    lastName: { type: String, required: true, minlength: 1, maxlength: 15 },
    email: { type: String, required: true, minlength: 1, unique: true },
    password: { type: String, required: true,},
    profileInfo: [profileData],
    likedPosts: {default: [], type: Array,},
    friends: {default: [], type: Array,},
    friendRequests: {default: [], type: Array},
    date: { type: Date, default: Date.now}
   
});
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({})
};

const User = mongoose.model('User', userSchema);
function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(15).required(),
        lastName: Joi.string().min(1).max(15).required(),
        email: Joi.string().min(1).required(),
        password: Joi.string().required(),
        likedPost: Joi.array(),
        friends: Joi.array(),
        friendRequests: Joi.array(),
        date: Joi.date(),
       
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;