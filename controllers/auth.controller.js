const userService = require('../services/user.service')

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userService.getUser(email, password);
        return res.send({...user, success: true})
    }catch(err) {
        next(err.message)
    }
}


const signup = async (req, res, next) => {
    try {
        const user = await userService.addUser(req.body)
        return  res.send({user, success: true})
    }catch(err) {
        next(err.message)
    }
}

module.exports = {
    login,
    signup
}

