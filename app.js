const express = require('express')
const conn = require('./services/db_connect')
const cors = require('cors')

// Conn to db
conn.conns

const host = '0.0.0.0'
const port = '5000'

const app = express()

app.use(cors())

app.use(express.json())

app.listen(port, host, ()=>{
    console.log(`Server started at http://${host}:${port}`)
})