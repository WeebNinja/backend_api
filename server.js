require('dotenv').config
require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const coreOptions = require('./src/config/corsOption')
const mongoose = require('mongoose')

app.use(express.json())
app.use(core(coreOptions))

console.log(process.env.PORT)

app.listen(3300,() => console.log('server is running with port 3300'))
