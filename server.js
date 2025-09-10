// server.js
const app = require("./app");

const PORT = process.env.APP_PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🌍 Restaurant API running on port ${PORT}`);
});

module.exports = server; // so tests can close it

