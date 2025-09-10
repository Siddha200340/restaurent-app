const request = require("supertest");
const app = require("../app");

describe("Unit Tests - Basic Routes", () => {
  it("GET / should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("🍴 Welcome to the Restaurant API!");
  });
});

