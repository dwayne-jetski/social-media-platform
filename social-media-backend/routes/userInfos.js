const express = require(`express`);
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const keys = require("../config/keys");

//Load input validation
const validateRegisterInput = require('../validators/register');
const validateLoginInput = require('../validators/login');
const { User } = require('../models/user'); //Not sure if needed
const { UserInfo, validateUserInfo } = require('../models/userInfo');
const { ExtractJwt } = require('passport-jwt'); //not sure if needed


// @route POST api/usersInfo/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    //form validation

    const { errors, isValid } = validateRegisterInput(req.body);

    //Check Validation 
    if(!isValid) {
        return res.status(400).json(errors)
    }

    UserInfo.findOne({email: req.body.email}).then(user => {
        if(user){
            return res.status(400).json({email: "Email Already Exists"});
        } else {
            const newUser = new UserInfo ({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            });

            //Hash pasword before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user=> res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/usersInfo/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    //From validation

    const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    console.log(req.body.email);
    const email = req.body.email; 
    console.log('email: ', email);
    const password = req.body.password;

    // Find user by email
    UserInfo.findOne({ email }).then(user => {
        //check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email Not Found"});
            }

        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch){
                //User Matched
                //Create JWT Payload
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName
                }

                //sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 //1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password Incorrect"});
            }
        });
    });
});


router.get(`/`, async (req, res) =>{
    try {
        const userInfos = await UserInfo.find();
        return res.send(userInfos);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

/* router.get('/:id', async (req, res) => {
    try {

        const product = await product.findByID(req.params.id);

        if (!userInfo)
        return res.status(400).send(`The userInfo with id "${req.params.id}" does not exist.`);

        return res.send(userInfo);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}); */

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

module.exports=router;