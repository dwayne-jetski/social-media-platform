const { UserInfo, validate } = require('../models/userinfo');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
        return res.status(400).send(error);
        
        const userInfo = new UserInfo({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            profileInfo: req.body.profileInfo,
        });
        await userInfo.save();
        return res.send(userInfo);
    
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

module.exports=router;




router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
        return res.status(400).send(error);
        
        
        const profileData = new profileData({
            posts: req.body.posts,
            aboutMe: req.body.aboutMe,
            likedMusic: req.body.likedMusic,
            dislikedMusic: req.body.dislikedMusic,
            profilePic: req.body.profilePic,
        });
        
        await profileData.save();


        return res.send(profileData);
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

module.exports=router;
