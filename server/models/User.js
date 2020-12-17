const { request } = require("express");

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
        required : true
    },
    iaAdmin : {
       type : Boolean,
        default : true
    },
    created : {
        type : Date,
        default : Date.now()
    }
});

let User = mongoose.model('user', UserSchema);
module.exports = User;
