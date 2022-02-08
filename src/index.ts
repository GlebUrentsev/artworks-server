/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import donenv from 'dotenv';
import { productController } from './controllers';
import mockProducts from './mocks/products.json';
import { Product } from './models/Product';

donenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  res.send('Artworks backend');
});

app.post('/mock-products', (_, res) => {
  // const {
  //   data: { filters },
  // } = req.body;

  // console.log(filters.category);
  res.send(mockProducts);
});

app.get('/add-mock-to-db', (_, res) => {
  try {
    mockProducts.products.map(async (product) => {
      const { name, category, price, currency, image, bestseller, details, featured } = product;

      const detailsObject = details ?? null;

      const newProduct = new Product({
        name,
        category,
        price,
        currency,
        featured,
        image: {
          src: image.src,
          alt: image.alt,
        },
        bestseller,
        details: detailsObject,
      });

      await newProduct.save();
    });

    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

app.get('/products', productController.getProducts);

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
  } catch (e) {
    console.log(e);
  }

  app.listen(PORT, () => console.log(`Server started on PORT -> ${PORT}`));
};

connectToDb().catch((err) => console.log(err));
