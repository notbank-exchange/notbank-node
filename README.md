# Notbank Node SDK

## Example

### Node

#### Rest client

```typescript
const publicKey = "...";
const secretKey = "...";
const userId = "...";

// rest client
const serviceFactory = new HttpServiceFactory();

// authentication
//Use authenticate or autenthicateUser
await serviceFactory.authenticateUser({
  ApiPublicKey: publicKey,
  ApiSecretKey: secretKey,
  UserId: userId,
});
```

Sample Success Response:
```json
{
  "Authenticated": true,
  "SessionToken": "b7b5aad9-6b2d-0127-dc01-a81e4326822b",
  "User": {
      "UserId": "yourUserid",
      "UserName": "yourName",
      "Email": "yourEmail",
      "EmailVerified": true,
      "AccountId": "yourAccountId",
      "OMSId": 1,
      "Use2FA": false
  },
  "Locked": false,
  "Requires2FA": false,
  "EnforceEnable2FA": false,
  "TwoFAType": null,
  "TwoFAToken": null,
  "errormsg": null
}
```
Sample Bad Response:
```json
{
    "Authenticated": false,
    "Locked": false,
    "errormsg": "Invalid username or password"
}
```

#### Get your balances
```typescript
const accountService = serviceFactory.newAccountService();
const accountId = 55 //Use desire accountId
const includePending = false //Optional, default = false

accountService.getAccountPositions({
  AccountId: accountId;
  IncludePending: includePending;
})
```
Success Response Example (a list of balance objects), on this case USDT balance:
```json
[
  {
    "OMSId": 1,
    "AccountId": 55,
    "ProductSymbol": "USDT",
    "ProductId": 5,
    "Amount": 100,
    "Hold": 0,
    "MarginLiability": 0,
    "MarginLend": 0,
    "PendingDeposits": 0,
    "PendingWithdraws": 0,
    "TotalDayDeposits": 0,
    "TotalMonthDeposits": 0,
    "TotalYearDeposits": 0,
    "TotalDayDepositNotional": 0,
    "TotalMonthDepositNotional": 0,
    "TotalYearDepositNotional": 0,
    "TotalDayWithdraws": 0,
    "TotalMonthWithdraws": 0,
    "TotalYearWithdraws": 0,
    "TotalDayWithdrawNotional": 0,
    "TotalMonthWithdrawNotional": 0,
    "TotalYearWithdrawNotional": 0,
    "NotionalProductId": 1,
    "NotionalProductSymbol": "USD",
    "NotionalValue": 100,
    "NotionalHoldAmount": 0,
    "NotionalRate": 1,
    "TotalDayTransferNotional": 0,
    "TotalDayInflowsAndOutflowsNotional": 100,
    "StartOfDayBalanceNotional": 0,
    "AvailableBalance": 100,
    "AvailableBalanceNotional": 100,
    "PendingDepositsNotional": 0
  },
  {
    ....
  },
  ....
]
```
Bad Response example:
```json
{
    "result": false,
    "errormsg": "Invalid Request",
    "errorcode": 100,
    "detail": "OMSId and AccountId must be Integers"
}
```

#### Open a Buy Order Limit on BTCUSDT market of 0.00045.
```typescript
const tradingService = serviceFactory.newTradingService();

const params = {
  InstrumentId: 154, //BTCUSDT
  AccountId: 55, //Use desire account with balance
  TimeInForce: 1 //TimeInForce.GTC
  Side: 0 //OrderSide.Buy
  OrderType: 2 //OrderTypeInt.Limit
  Quantity: 0.00045,
  LimitPrice: 104100,
};

await tradingService.sendOrder(params)
```
Success Response Example
```json
{
    "status": "Accepted",
    "errormsg": "",
    "OrderId": 193
}
```
Bad Response Example:
```json
{
    "status": "Rejected",
    "errormsg": "Not_Enough_Funds",
    "errorcode": 101
}
```

#### Get your balance again

```typescript
const accountService = serviceFactory.newAccountService();
const accountId = 55 //Use desire accountId

accountService.getAccountPositions({
  AccountId: accountId;
})
```
Success Response Example for USDT balance:
```json
[
  {
        "OMSId": 1,
        "AccountId": 99,
        "ProductSymbol": "USDT",
        "ProductId": 5,
        "Amount": 100,
        "Hold": 46.84500,
        "MarginLiability": 0,
        "MarginLend": 0,
        "PendingDeposits": 0,
        "PendingWithdraws": 0,
        "TotalDayDeposits": 0,
        "TotalMonthDeposits": 0,
        "TotalYearDeposits": 0,
        "TotalDayDepositNotional": 0,
        "TotalMonthDepositNotional": 0,
        "TotalYearDepositNotional": 0,
        "TotalDayWithdraws": 0,
        "TotalMonthWithdraws": 0,
        "TotalYearWithdraws": 0,
        "TotalDayWithdrawNotional": 0,
        "TotalMonthWithdrawNotional": 0,
        "TotalYearWithdrawNotional": 0,
        "NotionalProductId": 1,
        "NotionalProductSymbol": "USD",
        "NotionalValue": 100,
        "NotionalHoldAmount": 46.84500,
        "NotionalRate": 1,
        "TotalDayTransferNotional": 0,
        "TotalDayInflowsAndOutflowsNotional": 0,
        "StartOfDayBalanceNotional": 100,
        "AvailableBalance": 53.15500,
        "AvailableBalanceNotional": 53.15500,
        "PendingDepositsNotional": 0
    },
  {
    ....
  },
  ....
]
```

#### Cancel previous order for 0.00045 BTCUSDT.
```typescript
const tradingService = serviceFactory.newTradingService();

const params = {
  AccountId: 55, //Use desire account with balance
  OrderId: 193 //Previous open order ID
};

await tradingService.cancelOrder(params)
```
Good Response Example:
```json
{
    "result": true,
    "errormsg": null,
    "errorcode": 0,
    "detail": null
}
```

Bad Response Example (Incorrect OrderId):
```json
{
    "result": false,
    "errormsg": "Resource Not Found",
    "errorcode": 104,
    "detail": null
}
```

### Browser

Add the bundle file at `./dist/bundle.js` or `./dist/bundle.min.js`, as script tag.

```html
<script src="./dist/bundle.min.js"></script>
```

After this, you can add a new script and use the library through the global variable `NotbankSdk` .

```html
<script>
  const websocket = new NotbankSdk.WebsocketClient();
  const productService = websocket.newProductService();
  let products = [];

  websocket.connect().then(() => {
    productService
      .getProducts()
      .then((p) => (products = p))
      .catch((e) => console.error(e));
  });
</script>
```

## DevOps

### How to build

Run the following npm script

```cli
npm run build
```

This command will compile the library's code from Typescript to Javascript including its type declarations to be used in NodeJS and a bundle version for Browser
