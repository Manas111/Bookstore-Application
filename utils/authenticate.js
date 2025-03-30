const jwt = require('jsonwebtoken');
const User = require('../models/User')

const authenticate = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if(!authorization) {
            throw new Error("Authorization header required!")
        }
        const token = authorization.split(' ')[1];
        const userInfo = jwt.verify(token, process.env.JWTSECRET);
        if(!userInfo) {
            throw new Error("Invalid Token")
        }
        const user = await User.findOne({_id: userInfo.userId});
        if(!user) {
            throw new Error("User not authenticated!")
        }
        next();
    }catch(err) {
        next(err.message)   
    }
}


module.exports = authenticate;