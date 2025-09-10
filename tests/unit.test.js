const mongoose = require("mongoose");
const server = require("../server"); // import server
const request = require("supertest");
const app = require("../app");

describe("Unit Tests - Basic Routes", () => {
  it("GET / should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("🍴 Welcome to the Restaurant API!");
  });
});
afterAll(async () => {
  await mongoose.connection.close(); // close DB
  server.close(); // close server
});
