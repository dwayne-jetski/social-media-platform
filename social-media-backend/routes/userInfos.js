const { UserInfo, validateUserInfo, ProfileData, validateProfileData, NewPost, validateNewPost } = require(`../models/userinfo`);
const express = require(`express`);
const router = express.Router();

router.get(`/`, async (req, res) =>{
    try {
        const userInfos = await UserInfo.find();
        return res.send(userInfos);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:id', async (req, res) => {
    try {

        const product = await product.findByID(req.params.id);

        if (!userInfo)
        return res.status(400).send(`The userInfo with id "${req.params.id}" does not exist.`);

        return res.send(userInfo);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post(`/`, async (req, res) => {
    try {
        const { error } = validateUserInfo(req.body);
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




router.post(`/`, async (req, res) => {
    try {
        const { error } = validateUserInfo(req.body);
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

router.put(`/:id`, async (req,res) => {
    try {
        const { error } = validateUserInfo(req.body);
        if (error) return res.status(400).send(error);

        const userInfo = await UserInfo.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                userName: req.body.userName,
                password: req.body.password,
                profileInfo: req.body.profileInfo,
            },
            { new: true }
        );

        if (!userInfo)
        return res.status(400).send(`The userInfo with id "${req.params.id}" does not exist.`);

        await userInfo.save();

        return res.send(userInfo);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.delete(`/:id`, async (req, res) => {
    try {

        const userInfo = await UserInfo.findByIdAndRemove(req.params.id);

        if (!userInfo)
        return res.status(400).send(`The userInfo with id "${req.params.id}" does not exist.`);

        return res.send(userInfo);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);

    }
});