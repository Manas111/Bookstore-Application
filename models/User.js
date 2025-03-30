const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
    name: {
        type: String, 
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})


UserSchema.pre("save", async function (next) {
    const saltRounds = 10;
    const newPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = newPassword;
    next();
})


const User = model("User", UserSchema)
module.exports = User;





