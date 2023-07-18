const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/Rk8fHGGeyr8",
  },
  name: {
    type: String,
  },
  type: {
    type: String,
    // enum: ["Dog", "Cat"],
  },
  gender: {
    type: String,
    // enum: ["Male", "Female"],
  },
  breed: {
    type: String,
  },
  age: {
    type: String,
  },
  adoptionStatus: {
    type: String,
    // enum: ["Coming Soon", "Ready to Adopt", "Pending Adoption", "Adopted"],
  },
  introduction: {
    type: String,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("Pet", petSchema);
