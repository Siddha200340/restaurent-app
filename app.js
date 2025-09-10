// app.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/mydb";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Simple model for testing
const Item = mongoose.model("Item", new mongoose.Schema({ name: String }));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Node.js + MongoDB App running!");
});
app.post("/items", async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.status(201).json(item);
});
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

module.exports = app; // ✅ export only app

