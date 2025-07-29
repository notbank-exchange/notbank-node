import "mocha";
import { NotbankClient } from "../../lib/services/notbankClient";
import { SubscriptionService } from "../../lib/services/subscriptionService";

describe("websocket restarter", () => {
  let client: NotbankClient;
  let subscriptionService: SubscriptionService;

  before(async () => {
    client = NotbankClient.Factory.createWebsocketClient();
    console.log("restarter test")
    await client.connect();
    await client.authenticateUser({
      ApiPublicKey: "7b4d6a5cf5ac92a9edbbd7629ec8d901",
      ApiSecretKey: "507d3d06095d51037b159637e6042561",
      UserId: "9",
    });
    subscriptionService = client.getSubscriptionService();
  });

  after(async () => {
    await client.close();
  });

  describe("subscribeLevel1", () => {
    it.only("debería suscribirse correctamente a Level1", async () => {
      await subscriptionService.subscribeLevel1(
        {
          InstrumentId: 66,
          Symbol: "BTCUSDT",
        },
        snapshot => console.log(snapshot),
        update => console.log(update)
      );
      await sleepSeconds(3)
    });
  })

  function sleepSeconds(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1_000));
  }
});