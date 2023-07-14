const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))