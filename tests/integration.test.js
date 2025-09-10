const mongoose = require("mongoose");
const server = require("../server"); // import server
const request = require("supertest");
const app = require("../app");

describe("Integration Tests - Menu & Orders", () => {
  it("GET /menu should return menu items", async () => {
    const res = await request(app).get("/menu");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "🍝 Spaghetti" }),
        expect.objectContaining({ name: "🍰 Cake" })
      ])
    );
  });

  it("POST /order should place an order", async () => {
    const res = await request(app).post("/order").send({ item: "🍝 Spaghetti" });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toContain("Order placed");
  });
});
afterAll(async () => {
  await mongoose.connection.close(); // close DB
  server.close(); // close server
});
