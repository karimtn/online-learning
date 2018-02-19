const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String
    },
    nickname: {
        type: String
    },
    lastname: {
        type: String
    },
    name: {
        type: String
    },
    tel: {
        type: Number
    },
    pass: {
        type: String
    },
    pic:{
        type: String
    },
    userType:{
        type: String
    }

});

UserSchema.pre('save', function (next) {

    if (!this.isModified('pass')) {
        return next();
    }

    //Generate Salt Value
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        //Use this salt value to hash password
        bcrypt.hash(this.pass, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            this.pass = hash;
            next();
        });

    });

});

//Custom method to check the password correct when login
UserSchema.methods.isPasswordMatch = function (plainPassword, hashed, callback) {
    bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
        if (err) {
            next(err);
        }
        callback(null, isMatch);
    });
}

module.exports = mongoose.model('User', UserSchema);

