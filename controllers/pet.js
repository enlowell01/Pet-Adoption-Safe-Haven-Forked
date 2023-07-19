const Pet = require("../models/Pet");

async function getAllPets(req, res) {
  try {
    const pet = await Pet.find();
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet:", error);
    res.json({ message: "error fetching pet" });
  }
}

async function getPetById(req, res) {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet by id:", error);
    res.json({ message: "error fetching pet" });
  }
}

async function createPet(req, res) {
  try {
    if (!req.body.image) req.body.image = undefined;
    await new Pet(req.body).save();
    res.status(201).json({ message: "pet created" });
  } catch (error) {
    console.log("error creating pet:", error);
    res.json({ message: "error creating pet" });
  }
}

async function updatePetById(req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    if (!req.body.image) req.body.image = undefined;
    await Pet.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "pet updated" });
  } catch (error) {
    console.log("error updating pet:", error);
    res.json({ message: "error updating pet" });
  }
}

async function deletePetById(req, res) {
  try {
    const { id } = req.params;
    await Pet.findByIdAndDelete(id);
    res.status(204).json({ message: "pet deleted" });
  } catch (error) {
    console.log("error deleting pet:", error);
    res.json({ message: "error deleting pet" });
  } 
}

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  deletePetById,
  updatePetById,
};