const request = require("supertest");
const app = require("../../src/app");
describe("ONG", () => {
    before
    it("should be able to create a new ONG", async () => {
        const response = await request(app)
            .post("/ongs")
            .send({
                name: "APAD2",
                email: "contato@hotmail.com",
                whatsapp: "11111111111",
                city: "Rio Claro",
                uf: "SC"
            });
        console.log(response.body);
    });
});
