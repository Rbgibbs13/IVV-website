const { Schema, model } = require('mongoose');
const { Order } = require('./Order');
const bcrypt = require('bcrypt');

const userScehma = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Not accepted, please check your entry and use a correct email address!'],
    },
    orders: [Order.schema]

});

userScehma.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 8;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userScehma.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userScehma);
module.exports = User;