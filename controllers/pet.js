const router = require("express").Router();
const Pet = require("../models/Pet");

// routes

router.get('/', async function (req, res) {
  try {
    const pet = await Pet.find();
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet:", error);
    res.json({ message: "error fetching pet" });
  }
});

router.get('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.json(pet);
  } catch (error) {
    console.log("error fetching pet by id:", error);
    res.json({ message: "error fetching pet" });
  }
});

router.post('/', async function (req, res) {
  try {
    await new Pet(req.body).save();
    res.status(201).json({ message: "pet created" });
  } catch (error) {
    console.log("error creating pet:", error);
    res.json({ message: "error creating pet" });
  }
});

router.put('/:id', async function (req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    await Pet.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "pet updated" });
  } catch (error) {
    console.log("error updating pet:", error);
    res.json({ message: "error updating pet" });
  }
});

router.delete('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    await Pet.findByIdAndDelete(id);
    res.status(204).json({ message: "pet deleted" });
  } catch (error) {
    console.log("error deleting pet:", error);
    res.json({ message: "error deleting pet" });
  } 
});

module.exports = router;

// seeds pets

router.get('/data/seed', async function (req, res) {
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
  res.status(303).redirect('/pets');
});