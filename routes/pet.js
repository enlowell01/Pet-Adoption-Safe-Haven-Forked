const router = require("express").Router();

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
      petName: "Siobhan",
      gender: "Female",
      breed: "Tuxedo",
      age: "7 months",
      image:
        "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/cat-placeholder.svg",
      bio: "Loves tuna treats, laser pointers, and summoning otherworldly forces",
    },
    {
      petName: "Boe",
      gender: "Male",
      breed: "Mastiff mix",
      age: "3 years",
      image:
        "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/dog-placeholder.svg",
      bio: "Loves cuddles and fortune-telling. Up for any adventure!",
    },
    {
      petName: "Captain",
      gender: "Male",
      breed: "Lab mix",
      age: "7 years",
      image:
        "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/dog-placeholder.svg",
      bio: "Just vibin'. Will fetch anything. Ball. Shoes. Thor's Hammer.",
    },
    {
      petName: "Tofu",
      gender: "Female",
      breed: "Calico",
      age: "2 years",
      image:
        "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/cat-placeholder.svg",
      bio: "Sleep all day! Party all night!",
    },
    {
      petName: "Jim-Jam",
      gender: "Male",
      breed: "Heeler mix",
      age: "10 years",
      image:
        "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/dog-placeholder.svg",
      bio: "Nothing slows me down in my old age!",
    },
  ];

  await Pet.insertMany(data);
  res.status(303).redirect("/pets");
});