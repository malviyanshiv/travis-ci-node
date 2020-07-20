const request = require("supertest");
const app = require("../src/app");

test("test for index page", async () => {
    await request(app).get("/").expect(200);
});

test("Should confirm user login", async () => {
    await request(app)
        .post("/")
        .send({ username: "malviyanshiv", password: "welcome@node" })
        .expect(200);
});
