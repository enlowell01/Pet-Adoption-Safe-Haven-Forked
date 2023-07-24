const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  //all pets have these fields
  petType: {
    type: String,
    required: true,
    enum: ['Dog', 'Cat']
  },
  petName: {
    type: String,
    required: true
  },
  petAdoptionStatus: {
    type: String,
    required: true
  },
  petGender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  petBreed: {
    type: String
  },
  petAge: {
    type: String,
    required: true
  },
  petImage: {
    type: String,
    default: function() {
      if (this.petType === 'Dog') {
        return 'https://placedog.net/200/200';
      } else if (this.petType === 'Cat') {
        return 'http://placekitten.com/200/200';
      }
    }
  },
  petBio: {
    type: String
  }
});


module.exports = mongoose.model("Pet", petSchema);