require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./src/config/dbConn')
const corsOprions = require('./src/config/corsOptions')

connectDB()

app.use(express.json())
app.use(cors(corsOprions))
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api/auth', require('./src/routes/authRoutes'))
app.use('/api/users', require('./src/routes/userRoutes'))
app.use('/api/products', require('./src/routes/productRoutes'))
app.use('/api/customers', require('./src/routes/customerRoutes'))

/* MONGOOSE SETUP */
const port = process.env.PORT || 5001

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(port, () => console.log(`Server is runing with port ${port}`))
})

mongoose.connection.on('error', (err) => console.log(err))