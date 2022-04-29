const mongoose = require('mongoose')

const conns = mongoose.connect('mongodb://127.0.0.1/digischool', {useNewUrlParser:true, useUnifiedTopology:true})
const conn = mongoose.connection
conn.on('open', () => {
    console.log('Connected to database..........')
})

module.exports = conns