import assert from "assert";
import "mocha";

import { YieldProduct } from "../../lib/models/enums";
import { NotbankClient } from "../../lib/services/notbankClient";

describe("savings service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");

  describe("depositToYield", () => {
    it("should deposit to yield", async () => {
      const response = await client.getSavingsService().depositToYield({
        amount: 15.3,
        product_id: 4,
        type: YieldProduct.STABLE
      })
      console.log("transaction id:", response);
      assert.ok(response, "Response should not be null");
    });
  });

  describe("withdrawFromYield", () => {
    it("should withdraw from yield", async () => {
      const response = await client.getSavingsService().withdrawFromYield({
        amount: 15.3,
        product_id: 4,
        type: YieldProduct.STABLE
      })
      console.log("transaction id:", response);
      assert.ok(response, "Response should not be null");
    });
  });
});
