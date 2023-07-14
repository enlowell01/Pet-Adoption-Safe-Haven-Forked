const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["Dog", "Cat", "Other"],
  },
  petName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Female", "Male"],
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/cat-placeholder.svg",
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("Pet", petSchema);