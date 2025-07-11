import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";

describe("wallet service", () => {
  describe("getBanks", () => {
    it("should return a list of banks", async () => {
      const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
      await client.authenticateUser({
        ApiPublicKey: "aada11a919d9102f61fc1ca5a97ea578",
        ApiSecretKey: "f2647a3c19fd8431be971d1d7b2101f9",
        UserId: "9",
      });
      var accountId = 235;

      // get USDT user balance (also known as position)
      var positions = await client.getAccountService().getAccountPositions({ AccountId: accountId });
      var productSymbol = "USDT";
      var usdtPosition = positions
        .filter(position => position.ProductSymbol === productSymbol)
        .pop()
      if (!usdtPosition) {
        throw new Error("no usdt position")
      }

      // define quantityToSpend (between all usdt_balance and half usdt_balance)
      var myUsdtBalance = usdtPosition.Amount;
      var randomFraction = Math.random()
      var halfMyBalance = myUsdtBalance / 2
      var atLeastHalfMyBalance = myUsdtBalance - (randomFraction * halfMyBalance);
      var quantityToSpend = atLeastHalfMyBalance;

      var marketPair = "BTCUSDT";

      // define orderPrice (around market top)
    });
  });
});
