const mongoose = require('mongoose')
const bcrype = require('bcrypt')

const users = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    }, 
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        wnique: true
    },
    school_type: {
        type: String,
    },
    school_name: {
        type: String,
    },
    uset_type: {
        type: String,
        default: 'agent'
    }
})

user.pre('save', async function(next){
    const salt = await bycrypt.genSalt()
    const hashed = await bycrypt.hash(this.password, salt)
    this.password = hashed
    next()
})

module.exports("users", users)