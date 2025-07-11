import assert from "assert";
import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";

describe("http user service", () => {
  const client = NotbankClient.Factory.createRestClient();

  const service = client.getProductService();
  describe("get products", () => {
    it("fetches all products successfully", async function () {
      const response = await service.getProducts({})
      assert.ok(response, "esponse should be defined")
    })
  })

  describe("get product", () => {
    it("fetches product details successfully", async function () {
      const response = await service.getProduct({
        ProductId: 1,
      });
      assert.ok(response, "Response should not be null or undefined");
      assert.strictEqual(response.Product, "USD", "Product should be USD");
    });
    
    it("fails or returns error for invalid ProductId (e.g. -1)", async function () {
      try {
        const response = await service.getProduct({
          ProductId: -1,
        });
        assert.fail(
          "The call should have thrown an error for invalid ProductId",
        );
      } catch (error) {
        assert.ok(error, "Should throw an error for invalid ProductId");
      }
    });
  });
});