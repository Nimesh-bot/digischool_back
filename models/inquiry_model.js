const mongoose = require('mongoose')

const inquiry = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid number!'
        }
    },
    school_type: {
        type: String,
        required: true

    },
    school_name: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        default: 'agent',
        required: true
    },
    date: {
        type: String,
        default: Date.now,
    }
})

// user.pre('save', async function(next){
//     const salt = await bycrypt.genSalt()
//     const hashed = await bycrypt.hash(this.password, salt)
//     this.password = hashed
//     next()
// })

module.exports = mongoose.model("inquiry", inquiry)