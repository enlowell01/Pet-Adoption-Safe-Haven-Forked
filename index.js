const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const petRoutes = require('./routes/pet');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/pets', petRoutes);
// http://localhost:8080/pet

// DB Connection
mongoose.connect(process.env.MONGO_URI, { UseNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))