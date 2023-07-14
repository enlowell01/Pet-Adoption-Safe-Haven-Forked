const Pet = require('../models/Pet')

async function getAllPets(req, res) {
  try {
    const pet = await Pet.find()
    res.json(pet)
  } catch (error) {
      console.log('error fetching pet:', error)
      res.json({ 'message': 'error fetching pet' })
  }
}

async function getPetById(req, res) {
  try {
    const { id } = req.params
    const pet = await Pet.findById(id)
    res.json(pet)
  } catch (error) {
    console.log('error fetching pet by id:', error)
    res.json({ 'message': 'error fetching pet' })
  }
}

async function createPet(req, res) {
  try {
    await new Pet(req.body).save()
    res.status(201).json({ 'message': 'pet created' })
  } catch (error) {
    console.log('error creating pet:', error)
    res.json({ 'message': 'error creating pet' })
  }
}

module.exports = {
  getAllPets,
  getPetById,
  createPet
}