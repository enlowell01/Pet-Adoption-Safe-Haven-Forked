import express, { Request, Response } from 'express';
import Pet, { IPet } from '../models/Pet';

const router = express.Router();

// Get all pets
router.get('/', async (req: Request, res: Response) => {
  try {
    const pets: IPet[] = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error("error fetching pet:", error);
    res.status(500).json({ message: "error fetching pets" });
  }
});

// Get pet by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pet: IPet | null = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.json(pet);
  } catch (error) {
    console.error("error fetching pet by id:", error);
    res.status(500).json({ message: "error fetching pet" });
  }
});

// Create a new pet
router.post('/', async (req: Request, res: Response) => {
  try {
    const newPet: IPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json({ message: "pet created" });
  } catch (error) {
    console.error("error creating pet:", error);
    res.status(500).json({ message: "error creating pet" });
  }
});

// Update pet by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedPet: IPet | null = await Pet.findByIdAndUpdate(id, req.body);
    if (!updatedPet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(204).json({ message: "pet updated" });
  } catch (error) {
    console.error("error updating pet:", error);
    res.status(500).json({ message: "error updating pet" });
  }
});

// Delete pet by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedPet: IPet | null = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(204).json({ message: "pet deleted" });
  } catch (error) {
    console.error("error deleting pet:", error);
    res.status(500).json({ message: "error deleting pet" });
  }
});

// Seed pets
router.get('/data/seed', async (req: Request, res: Response) => {
  const data: IPet[] = [
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

export default router;
