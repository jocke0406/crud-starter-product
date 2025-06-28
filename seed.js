require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const seedData = [
  { name: 'Laptop', price: 999, category: 'Electronics', description: 'High performance laptop', inStock: true },
  { name: 'Phone', price: 699, category: 'Electronics', description: 'Smartphone with great camera', inStock: true }
];

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  await Product.deleteMany();
  await Product.insertMany(seedData);
  console.log('Database seeded');
  mongoose.disconnect();
});
