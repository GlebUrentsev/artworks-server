/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import donenv from 'dotenv';
import { productController } from './controllers';
import mockProducts from './mocks/products.json';

donenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  res.send('Artworks backend');
});

app.get('/mock-products', (_, res) => {
  res.send(mockProducts);
});

app.get('/products', productController.getProducts);

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
  } catch (e) {
    console.log(e);
  }

  app.listen(4000, () => console.log(`Server started on PORT -> ${PORT}`));
};

connectToDb().catch((err) => console.log(err));
