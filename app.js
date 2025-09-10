require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// Sample routes
app.get("/", (req, res) => {
  res.send("🍴 Welcome to the Restaurant API!");
});

app.get("/menu", (req, res) => {
  res.json([
    { id: 1, name: "🍝 Spaghetti" },
    { id: 2, name: "🍰 Cake" }
  ]);
});

app.post("/order", (req, res) => {
  if (!req.body.item) {
    return res.status(400).json({ error: "No item ordered" });
  }
  res.status(201).json({ message: `✅ Order placed for ${req.body.item}` });
});

// Start server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌍 Restaurant API running on port ${PORT}`);
});

module.exports = app; // Export for testing

