import assert from "assert";
import "mocha";

import { HttpServiceFactory } from "../../lib/services/httpServiceFactory";
import { GetAccountTransactionsRequest } from "../../lib/models/request/getAccountTransactions";

describe("http account service", () => {
  const serviceFactory = new HttpServiceFactory("stgapi.notbank.exchange");


  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await serviceFactory.authenticate({
      ApiPublicKey: "ca1817fd1f2ec412ef3ab8086d5da0d3",
      ApiSecretKey: "da365b63efebc9deda12ce854dc4846abb71d772e644b3812116dd016e9070e2",
      UserId: "64",
    });
  });

  const accountService = serviceFactory.newAccountService();

    describe("getAccountTransactions", () => {
    it("should return transactions with valid AccountId", async () => {
      const params: GetAccountTransactionsRequest = {
        AccountId: 99,
      };

      const response = await accountService.getAccountTransactions(params);
      console.log("Transactions:", response);

      assert.ok(Array.isArray(response), "Response should be an array");
    });

    it("should throw error if AccountId is not a number", async () => {
      try {
        await accountService.getAccountTransactions({ AccountId: "invalid" as any });
        assert.fail("Should have thrown a validation error");
      } catch (error: any) {
        assert.match(error.message, /AccountId must be a number/);
      }
    });
  });
});
