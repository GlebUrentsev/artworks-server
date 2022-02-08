import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  featured: { type: Boolean, required: true },
  bestseller: { type: Boolean, required: true },
  image: {
    type: {
      src: { type: String, required: false },
      alt: { type: String, required: false },
    },
    default: null,
    required: false,
  },
  details: {
    type: {
      dimentions: {
        type: {
          width: { type: Number, required: false },
          height: { type: Number, required: false },
        },
        required: false,
      },
      size: {
        type: { type: Number, required: false },
        required: false,
      },
      description: { type: String, required: false },
      recommendations: {
        type: [
          {
            src: { type: String, required: false },
            alt: { type: String, required: false },
          },
        ],
        required: false,
      },
    },
    required: false,
  },
});

const Product = model('Product', ProductSchema);

export { Product };
