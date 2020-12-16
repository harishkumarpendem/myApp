const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const { request, response } = require('express');

/*
usage : to Register a User
path : /User/register
fields : name, email, password
method : POST
*/

router.post('/register',[
    check('name').notEmpty().withMessage('Name is Required'),
    check('email').is Email().withMessage('Proper email is Required'),
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
        let
    }
}
)

module.exports = router;