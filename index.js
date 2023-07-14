// required
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// defining routes
const petRoutes = require('./routes/pet')

const app = express()

//middlewares
app.use(express.json())

// routes
app.use('/pets', petRoutes)
// http://localhost:8080/pet

//db connection
mongoose.connect(process.env.MONGO_URI, { UseNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

// defining port
const PORT = process.env.PORT || 8080

// turning server on
app.listen(PORT, console.log(`listening on port ${PORT}`))