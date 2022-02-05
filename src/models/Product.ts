import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

const Product = model('Product', ProductSchema);

export { Product };
