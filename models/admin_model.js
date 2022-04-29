const mongoose = require('mongoose')
const bycrypt = require('bcrypt')

const admin = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

user.pre('save', async function(next){
    const salt = await bycrypt.genSalt()
    const hashed = await bycrypt.hash(this.password, salt)
    this.password = hashed
    next()
})

module.exports = mongoose.model("admin", admin)