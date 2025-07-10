import assert from "assert";
import "mocha";

import { GetAccountTransactionsRequest } from "../../lib/models/request/getAccountTransactions";
import { NotbankClient } from "../../lib/services/NotbankClient";

describe("http account service", () => {
  const client = NotbankClient.Factory.createRestClient();


  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await client.authenticateUser({
      ApiPublicKey: "ca1817fd1f2ec412ef3ab8086d5da0d3",
      ApiSecretKey: "da365b63efebc9deda12ce854dc4846abb71d772e644b3812116dd016e9070e2",
      UserId: "64",
    });
  });

  const service = client.getWalletService();

  describe("getBanks", () => {
    it.only("should return a list of banks", async () => {
      const response = await service.getBanks({ country: "CL" });
      console.log("banks:", response);

      assert.ok(Array.isArray(response), "Response should be an array");
    });
  });
});
