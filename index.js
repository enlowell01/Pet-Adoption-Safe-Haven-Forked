const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const petRoutes = require('./controllers/pet');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*'
}));

// Routes
app.use('pets', petRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, { UseNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT 

app.listen(PORT, console.log(`listening on port ${PORT}`))

module.exports = app;