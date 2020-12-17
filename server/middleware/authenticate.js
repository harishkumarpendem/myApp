const { request, response } = require('express');
const jwt = require('jsonwebtoken');

let authenticate = (request, response, next) => {
    if(!request.headers.authorization){
        return response.status(401).json({msg : 'Unauthorized request'});
    }
    let token = request.headers.authorization.split(' ')[1];
    if(!token){
        return response.status(401).json({msg : 'No token provided'});
    }
    let payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if(!payload){
        return response.status(401).json({msg : 'Invalid Token'});
    }
    request.user = payload.user;
    next();
};
module.exports = authenticate;