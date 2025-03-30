const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const addUser = async (userBody) => {
    const user = await User.create(userBody);
    return user;
}


const getUser = async (email, password) => {
    const user = await User.findOne({email});
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch) {
        throw new Error("Passwords do not match");
    }
    const token = jwt.sign({
        userId: user._id,
        email: user.email
    }, process.env.JWTSECRET, {
        expiresIn: 2 * 24 * 60 * 60 * 1000
    })
    return { token };
}


module.exports = {
    addUser,
    getUser
}


