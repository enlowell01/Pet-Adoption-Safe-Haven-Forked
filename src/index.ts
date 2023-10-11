import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import petRoutes from './controllers/pet';

dotenv.config();

const app = express();
const PORT: string | number = process.env.PORT || 3000; // You can define a default value if PORT is not provided in the environment.

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/pets', petRoutes);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
