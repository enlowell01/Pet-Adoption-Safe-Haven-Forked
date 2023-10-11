import mongoose, { Document, Model } from 'mongoose';

enum PetType {
  Dog = 'Dog',
  Cat = 'Cat',
}

enum PetGender {
  Male = 'Male',
  Female = 'Female',
}

interface IPet extends Document {
  petType: PetType;
  petName: string;
  petAdoptionStatus: string;
  petGender: PetGender;
  petBreed?: string;
  petAge: string;
  petImage?: string;
  petBio: string;
}

const petSchema = new mongoose.Schema<IPet>({
  petType: {
    type: String,
    required: true,
    enum: Object.values(PetType),
  },
  petName: {
    type: String,
    required: true,
  },
  petAdoptionStatus: {
    type: String,
    required: true,
  },
  petGender: {
    type: String,
    required: true,
    enum: Object.values(PetGender),
  },
  petBreed: {
    type: String,
  },
  petAge: {
    type: String,
    required: true,
  },
  petImage: {
    type: String
  },
  petBio: {
    type: String,
  },
});

const Pet: Model<IPet> = mongoose.model<IPet>('Pet', petSchema);
export default Pet;
