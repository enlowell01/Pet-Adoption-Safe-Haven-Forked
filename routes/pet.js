const router = require('express').Router()
const {
  getAllPets,
  getPetById,
  createPet
} = require('../controllers/pet')

// GET / get all pets
router.get('/', getAllPets)

// GET /:id get pet by id
router.get('/:id', getPetById)

// POST / create pet
router.post('/', createPet)

// PUT /:id update

// Delete /:id delete pet by id

module.exports = router