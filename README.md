# Notbank Node SDK

[main page](https://notbank.exchange)

[sign up in Notbank](https://www.cryptomkt.com/account/register).

## Installation

To install Notbank use npm

```bash
npm install notbank
```

## Documentation

This sdk makes use of the [api](https://apidoc.notbank.exchange) of Notbank.

## Quick start

### Rest client

```typescript
// client
const client = NotbankClient.Factory.createRestClient();

// authentication
await client.authenticateUser({
  ApiPublicKey: "my-public-key",
  ApiSecretKey: "my-secret-key",
  UserId: "xxxx"
});
```

### handling errors

```typescript
try {
  const response = await accountService.getAccountPositions({
    AccountId: 13,
    IncludePending: true,
  });
} catch (err) {
  const error = err as NotbankError;
  // handle error
}
```

### Put order at the top of book example

```typescript
const client = NotbankClient.Factory.createRestClient();
await client.authenticateUser({
  ApiPublicKey: "my-public-key",
  ApiSecretKey: "my-secret-key",
  UserId: "xxxx",
});
var accountId = 235;

// get USDT user balance (also known as position)
var positions = await client
  .getAccountService()
  .getAccountPositions({ AccountId: accountId });
var productSymbol = "USDT";
var usdtPosition = positions
  .filter(position => position.ProductSymbol === productSymbol)
  .pop();
if (!usdtPosition) {
  throw new Error("no usdt position");
}

// define quantityToSpend (between all usdt_balance and half usdt_balance)
var myUsdtBalance = usdtPosition.Amount;
var randomFraction = Math.random();
var halfMyBalance = myUsdtBalance / 2;
var atLeastHalfMyBalance = myUsdtBalance - randomFraction * halfMyBalance;
var quantityToSpend = atLeastHalfMyBalance;

var marketPair = "BTCUSDT";

// define orderPrice (around market top)
var btcUsdtOrderbook = await client
  .getTradingService()
  .getOrderBook({ Market_Pair: marketPair, Depth: 5, Level: 2 });
var randomSmallFraction = (Math.random() * 90 + 10) / 1000;
var topBid = btcUsdtOrderbook.bids[0];
var orderPrice = topBid.price + randomSmallFraction;
// TODO: handle tick size
var orderQuantity = quantityToSpend / orderPrice;

// send order
var instruments = await client.getInstrumentService().getInstruments();
var btcUsdtInstrument = instruments.filter(
  pair => pair.Symbol === marketPair
)[0];
var orderResult = await client.getTradingService().sendOrder({
  InstrumentId: btcUsdtInstrument.InstrumentId,
  AccountId: accountId,
  TimeInForce: TimeInForce.GTC,
  Side: OrderSide.Buy,
  OrderType: OrderTypeInt.Limit,
  Quantity: orderQuantity,
  LimitPrice: orderPrice
});

// handle order result
if (orderResult.Status === "Rejected") {
  // order was rejected
  console.log("order rejected");
  console.log(orderResult.Message);
  return;
}
// order was accepted
console.log("orderId,", orderResult.OrderId);

// cancel order
await client.getTradingService().cancelOrder({
  AccountId: accountId,
  OrderId: orderResult.OrderId
});
return orderResult.OrderId;
```


### websocket client
The websocket client can be instanced with auto reconnection active. If done, then the restarting websocket will reconnect forever when the connection goes down unexpectedly, re-authenticating if it was authenticated, and re-subscribing to already stablished subscriptions. While reconnecting, calls to the websocket will throw. For subscriptions, reconnection will call again the snapshot hooks.
```typescript
client = NotbankClient.Factory.createWebsocketClient({
  withReconnect: true
});
await client.connect();
await client.authenticateUser({
  ApiPublicKey: "my-public-key",
  ApiSecretKey: "my-secret-key",
  UserId: "xxxx"
});
// ...
client.close();
```

## DevOps

### How to build

Run the following npm script

```bash
npm run build
```

This command will compile the library's code from Typescript to Javascript including its type declarations to be used in NodeJS and a bundle version for Browser.
