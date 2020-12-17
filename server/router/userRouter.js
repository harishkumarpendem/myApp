const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');


/*
usage : to Register a User
path : /User/register
fields : name, email, password
method : POST
*/

router.post('/register',[
    check('name').notEmpty().withMessage('Name is Required'),
    check('email').isEmail().withMessage('Proper email is Required'),
    check('password').isLength({min : 6}).withMessage('Min 6 characters for Password'),
], async(request, response) => {
    let error = validationResult(request);
    
    // if it contains errors
    if (!error.isEmpty()){
        return response.status(400).json({error : error.array()});
    }
    try{
        let {name, email, password} = request.body;

        //check the user exists
        let user = await user.findOne({email});
        if(user){
            return response.status(400).json({errors : [{msg : 'User Already Exists'}]});
        }
        
        //encode the password
        let salt = await bcrypt.getSalt(10);
        password = await bcrypt.hash(password, salt);

        // get the Avatar
        let avatar = gravatar.url(email, {
            s : '200',
            r : 'pg',
            d : 'mm'
        });

        //Store the user
        user = newUser ({name, email, password, avatar});
        await user.save();

        //json web token
        let payload = {
            user : {
                id : user.id
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET_KEY,(err, token) =>{
            if(err) throw err;
            response.status(200).json({
                result : 'success',
                token : token
            });
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({errors: [{msg : err.message}]});
    }
});

/*
Usage : To login a User
path : /User/Login
fields : email, password
method : POST
ACCESS : PUBLIC
*/

router.post ('login', [
    check('email').isEmail().withMessage('Proper email is required'),
    check('password').isEmail().withMessage('Proper password is required'),
], async (request, response) => {
    let error = validationResult(request);
    //if it contains errors
    if(!errors.isEmpty()){
        return response.status(400).json({errors : errors.array()});
    }

    try {
        let {email,password} = request.body;

        //check if user exists
        let user = await user.finOne({email});
        if(!user){
            return response.status(400).json({errors : [{msg : 'Invalid credentials'}]});
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return response.status(400).json({errors : [{msg : 'Invalid credentials'}]});
        }

        //json web token
        let payload = {
            user : {
                id : user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET_KEY, (err, token) => {
            if(err) throw err;
            response.status(200).json({
                result : 'success',
                token : token
            });
        });
    }
    catch (err) {
        console.error(err);
        Response.status(500).json({errors : [{msg : err.message}]});
    }
});

/*
Usage : To GET a User Info
path : /User/
fields : no fields
method : GET
ACCESS : PRIVATE
*/

router.get('/', authenticate, async (request, response) => {
    try {
        let user = await user.findById(request.user.id).select('.password');
        response.status(200).json({
            user : user
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({errors : [{msg : err.message}]});
    }
});

module.exports = router;