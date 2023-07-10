const router = require("express").Router();
const {
  getAllPet,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require("../controllers/Pet");

// GET / get all Pets
router.get("/", getAllPet);

// GET /:id get Pet by id
router.get("/:id", getPetById);

// POST / create Pet
router.post("/", createPet);

// PUT /:id update Pet by id
router.put("/:id", updatePetById);

// DELETE /:id delete Pet by id
router.delete("/:id", deletePetById);

module.exports = router;
