/*const router = require("express").Router();

const {
  getAllPets,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require("../controllers/pet");

const Pet = require("../models/Pet");

// GET / get all Pets
router.get("/", getAllPets);

// GET /:id get Pet by id
router.get("/:id", getPetById);

// POST / create Pet
router.post("/", createPet);

// PUT /:id update Pet by id
router.put("/:id", updatePetById);

// DELETE /:id delete Pet by id
router.delete("/:id", deletePetById);

module.exports = router;

//seed database
router.get("/data/seed", async (req, res) => {
  const data = [
    {
      petType: "Cat",
      petName: "Siobhan",
      petAdoptionStatus: "Coming Soon",
      petGender: "Female",
      petBreed: "Tuxedo",
      petAge: "7 months",
      petBio: "Loves tuna treats, laser pointers, and summoning otherworldly forces",
    },
    {
      petType: "Dog",
      petName: "Boe",
      petAdoptionStatus: "Pending Adoption",
      petGender: "Male",
      petBreed: "Mastiff mix",
      petAge: "3 years",
      petBio: "Loves cuddles and fortune-telling. Up for any adventure!",
    },
    {
      petType: "Dog",
      petName: "Captain",
      petAdoptionStatus: "Ready to Adopt",
      petGender: "Male",
      petBreed: "Lab mix",
      petAge: "7 years",
      petBio: "Just vibin'. Will fetch anything. Ball. Shoes. Thor's Hammer.",
    },
    {
      petType: "Cat",
      petName: "Tofu",
      petAdoptionStatus: "Pending Adoption",
      petGender: "Female",
      petBreed: "Calico",
      petAge: "2 years",
      petBio: "Sleep all day! Party all night!",
    },
    {
      petType: "Dog",
      petName: "Jim-Jam",
      petAdoptionStatus: "Pending Adoption",
      petGender: "Male",
      petBreed: "Heeler mix",
      petAge: "10 years",
      petBio: "Nothing slows me down in my old age!",
    },
  ];

  await Pet.insertMany(data);
  res.status(303).redirect("/pets");
});*/

