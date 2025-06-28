# 🛠️ CRUD Starter – Product API

A simple Express + MongoDB API to manage a basic **Product** entity.

## 🚀 Features

- Full CRUD (Create, Read, Update, Delete)
- RESTful routes
- Mongoose ODM
- MongoDB integration
- `.env` environment support

## 📦 Project Structure

```
crud-starter-product
│
├── app.js
├── .gitignore
├── package.json
├── README.md
├── .env.example
├── seed.js
│
├── models/
│   └── Product.js
│
├── controllers/
│   └── productController.js
│
└── routes/
    └── productRoutes.js
```

## ✅ Prerequisites

- Node.js ≥ 16.x
- MongoDB running locally or remotely

## 🧪 Seed Data (Optional)

To populate the database with sample products:

```bash
node seed.js
```

## 🌐 API Endpoints

- `GET /api/products` – Fetch all products
- `GET /api/products/:id` – Fetch a product by ID
- `POST /api/products` – Create a new product
- `PUT /api/products/:id` – Update an existing product
- `DELETE /api/products/:id` – Delete a product

## 🧭 MongoDB Compass

Optional GUI: connect to `mongodb://localhost:27017` and select `myapidb`, collection `products`.

## 🌍 GitHub Rep

[Link to GitHub repository](https://github.com/jocke0406/crud-starter-product)
