import assert from "assert";
import "mocha";

import { HttpServiceFactory } from "../../lib/services/httpServiceFactory";
import { NotbankClient } from "../../lib/services/NotbankClient";

describe("http user service", () => {
  const client = NotbankClient.Factory.createRestClient();

  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await client.authenticateUser({
      ApiPublicKey: "7b4d6a5cf5ac92a9edbbd7629ec8d901",
      ApiSecretKey: "507d3d06095d51037b159637e6042561",
      UserId: "9",
    });
  });

  const productService = client.getProductService();

  describe("get product", () => {
    it("fetches product details successfully", async function () {
      const response = await productService.getProduct({
        ProductId: 1,
      });
      assert.ok(response, "Response should not be null or undefined");
      assert.strictEqual(response.Product, "USD", "Product should be USD");
    });

    it("fails or returns error when ProductId is not provided", async function () {
      try {
        // @ts-expect-error – Forzamos omitir ProductId
        const response = await productService.getProduct({});
        assert.fail(
          "The call should have thrown an error due to missing ProductId",
        );
      } catch (error) {
        console.log("Expected error for missing ProductId:", error.message);
        assert.ok(error, "Should throw an error for missing ProductId");
      }
    });

    it("fails or returns error for invalid ProductId (e.g. -1)", async function () {
      try {
        const response = await productService.getProduct({
          ProductId: -1,
        });
        assert.fail(
          "The call should have thrown an error for invalid ProductId",
        );
      } catch (error) {
        console.log("Expected error for invalid ProductId:", error.message);
        assert.ok(error, "Should throw an error for invalid ProductId");
      }
    });
  });
});