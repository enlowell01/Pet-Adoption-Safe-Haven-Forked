const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  //all pets have these fields
  petType: {
    type: String,
    required: true,
    enum: ['dog', 'cat']
  },
  petName: {
    type: String,
    required: true,
  },
  adoptionStatus: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  breed: {
    type: String,
  },
  color: {
    type: String,
  },
  age: {
    type: String
  },
  image: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
    //Image by catalyststuff on Freepik
  },
  bio: {
    type: String,
  }
});

module.exports = mongoose.model("Pet", petSchema);