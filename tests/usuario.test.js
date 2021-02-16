const { response } = require("express");
const request = require("supertest");
test("rota get usuarios", () => {
  request("http://localhost:3001")
    .get("/usuario")
    .expect(200)
    .then((response) => {
      expect(req.body[0].ID).toBe(1);
      console.log(response);
    });
});
