var NotbankSdk = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/universal-websocket-client/browser.js
  var require_browser = __commonJS({
    "node_modules/universal-websocket-client/browser.js"(exports, module) {
      "use strict";
      module.exports = WebSocket;
    }
  });

  // lib/index.ts
  var index_exports = {};
  __export(index_exports, {
    HttpClient: () => HttpClient2,
    WebsocketClient: () => WebsocketClient2,
    default: () => index_default
  });

  // lib/utils/completeParams.ts
  function completeParams(params, omsId) {
    return __spreadProps(__spreadValues({}, params), {
      OMSId: omsId
    });
  }

  // lib/services/userService.ts
  var _serviceCore;
  var UserService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore, serviceCore);
    }
    getUserAccounts(request) {
      return __async(this, null, function* () {
        if (request.UserId && typeof request.UserId !== "number")
          throw new Error("UserId must be a number.");
        const params = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore).request(
          "GetUserAccounts" /* GET_USER_ACCOUNTS */,
          0 /* POST */,
          params
        );
        return response;
      });
    }
    getUserDevices(request) {
      return __async(this, null, function* () {
        if (request.UserId && typeof request.UserId !== "number")
          throw new Error("UserId must be a number.");
        const response = yield __privateGet(this, _serviceCore).request(
          "GetUserDevices" /* GET_USER_DEVICES */,
          0 /* POST */,
          request
        );
        return response;
      });
    }
    getUserInfo(request) {
      return __async(this, null, function* () {
        if (request.UserId && typeof request.UserId !== "number")
          throw new Error("UserId must be a number.");
        const response = yield __privateGet(this, _serviceCore).request(
          "GetUserInfo" /* GET_USER_INFO */,
          0 /* POST */,
          request
        );
        return response;
      });
    }
    getUserPermissions(request) {
      return __async(this, null, function* () {
        if (request.UserId == null || typeof request.UserId !== "number")
          throw new Error("UserId is required and must be a number.");
        const response = yield __privateGet(this, _serviceCore).request(
          "GetUserPermissions" /* GET_USER_PERMISSIONS */,
          0 /* POST */,
          request
        );
        return response;
      });
    }
  };
  _serviceCore = new WeakMap();

  // lib/services/accountService.ts
  var _serviceCore2;
  var AccountService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore2);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore2, serviceCore);
    }
    getAccountTransactions(request) {
      return __async(this, null, function* () {
        if (request.AccountId && typeof request.AccountId !== "number") {
          throw new Error("AccountId must be a number.");
        }
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore2).request(
          "GetAccountTransactions" /* GET_ACCOUNT_TRANSACTIONS */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getAccountPositions(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore2).request(
          "GetAccountPositions" /* GET_ACCOUNT_POSITIONS */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getAccountInstrumentStatistics(params) {
      return __async(this, null, function* () {
        if (!params.AccountId) {
          throw new Error("AccountId is required field.");
        }
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore2).request(
          "GetAccountInstrumentStatistics" /* GET_ACCOUNT_INSTRUMENT_STATISTICS */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getAccountSettlementPositions(params) {
      return __async(this, null, function* () {
        if (!params.AccountId) {
          throw new Error("OMSId and AccountId are required fields.");
        }
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore2).request(
          "GetAccountSettlementPositions" /* GET_ACCOUNT_SETTLEMENT_POSITIONS */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getAccountInfo(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore2).request(
          "GetAccountInfo" /* GET_ACCOUNT_INFO */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
  };
  _serviceCore2 = new WeakMap();

  // lib/services/authService.ts
  var _serviceCore3;
  var AuthService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore3);
      __privateSet(this, _serviceCore3, serviceCore);
    }
    /**
     * https://apidoc.notbank.exchange/?http#webauthenticateuser
     */
    webAuthenticateUser(params) {
      return __async(this, null, function* () {
        return yield __privateGet(this, _serviceCore3).request(
          "WebAuthenticateUser" /* WEB_AUTHENTICATE_USER */,
          2 /* NONE */,
          params
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/?http#logout
     */
    logOut() {
      return __async(this, null, function* () {
        return yield __privateGet(this, _serviceCore3).request("LogOut" /* LOGOUT */, 0 /* POST */);
      });
    }
  };
  _serviceCore3 = new WeakMap();

  // lib/services/feeService.ts
  var _serviceCore4;
  var FeeService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore4);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore4, serviceCore);
    }
    getDepositFee(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore4).request(
          "GetDepositFee" /* GET_DEPOSIT_FEE */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getWithdrawFee(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore4).request(
          "GetWithdrawFee" /* GET_WITHDRAW_FEE */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getOMSWithdrawFees(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore4).request(
          "GetOMSWithdrawFees" /* GET_OMS_WITHDRAW_FEES */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getOMSDepositFees(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore4).request(
          "GetOMSDepositFees" /* GET_OMS_DEPOSIT_FEES */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getAccountFees(params) {
      return __async(this, null, function* () {
        if (!params.AccountId) {
          throw new Error("AccountId is required.");
        }
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore4).request(
          "GetAccountFees" /* GET_ACCOUNT_FEES */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getOrderFee(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore4).request(
          "GetOrderFee" /* GET_ORDER_FEE */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
  };
  _serviceCore4 = new WeakMap();

  // lib/services/instrumentService.ts
  var _serviceCore5;
  var InstrumentService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore5);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore5, serviceCore);
    }
    getInstruments(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore5).request(
          "GetInstruments" /* GET_INSTRUMENTS */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getInstrument(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore5).request(
          "GetInstrument" /* GET_INSTRUMENT */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getInstrumentVerificationLevelConfigs(params) {
      return __async(this, null, function* () {
        if (!params.AccountId) {
          throw new Error("AccountId is required.");
        }
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore5).request(
          "GetInstrumentVerificationLevelConfig" /* GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
  };
  _serviceCore5 = new WeakMap();

  // lib/services/productService.ts
  var _serviceCore6;
  var ProductService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore6);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore6, serviceCore);
    }
    getProduct(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore6).request(
          "GetProduct" /* GET_PRODUCT */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getProducts(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore6).request(
          "GetProducts" /* GET_PRODUCTS */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getVerificationLevelConfig(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore6).request(
          "GetVerificationLevelConfig" /* GET_VERIFICATION_LEVEL_CONFIG */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
  };
  _serviceCore6 = new WeakMap();

  // lib/services/reportService.ts
  var _serviceCore7;
  var ReportService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore7);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore7, serviceCore);
    }
  };
  _serviceCore7 = new WeakMap();

  // lib/services/systemService.ts
  var _serviceCore8;
  var SystemService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore8);
      __privateSet(this, _serviceCore8, serviceCore);
    }
    ping() {
      return __async(this, null, function* () {
        return yield __privateGet(this, _serviceCore8).request(
          "Ping" /* PING */,
          0 /* POST */
        );
      });
    }
    healthCheck() {
      return __async(this, null, function* () {
        return yield __privateGet(this, _serviceCore8).request(
          "HealthCheck" /* HEALTH_CHECK */,
          0 /* POST */
        );
      });
    }
  };
  _serviceCore8 = new WeakMap();

  // lib/models/common/orderType.ts
  var OrderTypeInt = /* @__PURE__ */ ((OrderTypeInt2) => {
    OrderTypeInt2[OrderTypeInt2["Unknown"] = 0] = "Unknown";
    OrderTypeInt2[OrderTypeInt2["Market"] = 1] = "Market";
    OrderTypeInt2[OrderTypeInt2["Limit"] = 2] = "Limit";
    OrderTypeInt2[OrderTypeInt2["StopMarket"] = 3] = "StopMarket";
    OrderTypeInt2[OrderTypeInt2["StopLimit"] = 4] = "StopLimit";
    OrderTypeInt2[OrderTypeInt2["TrailingStopMarket"] = 5] = "TrailingStopMarket";
    OrderTypeInt2[OrderTypeInt2["TrailingStopLimit"] = 6] = "TrailingStopLimit";
    OrderTypeInt2[OrderTypeInt2["BlockTrade"] = 7] = "BlockTrade";
    return OrderTypeInt2;
  })(OrderTypeInt || {});
  var OrderTypeStr = /* @__PURE__ */ ((OrderTypeStr2) => {
    OrderTypeStr2["Unknown"] = "Unknown";
    OrderTypeStr2["Market"] = "Market";
    OrderTypeStr2["Limit"] = "Limit";
    OrderTypeStr2["StopMarket"] = "StopMarket";
    OrderTypeStr2["StopLimit"] = "StopLimit";
    OrderTypeStr2["TrailingStopMarket"] = "TrailingStopMarket";
    OrderTypeStr2["TrailingStopLimit"] = "TrailingStopLimit";
    OrderTypeStr2["BlockTrade"] = "BlockTrade";
    return OrderTypeStr2;
  })(OrderTypeStr || {});

  // lib/utils/completeParamsArray.ts
  function completeParamsArray(paramsArray, omsId) {
    return paramsArray.map((params) => __spreadProps(__spreadValues({}, params), {
      OMSId: omsId
    }));
  }

  // lib/utils/parseIndexTrade.ts
  function parseIndexTrade(jsonTrade) {
    return {
      TradeId: jsonTrade[0],
      InstrumentId: jsonTrade[1],
      Quantity: jsonTrade[2],
      Price: jsonTrade[3],
      Order1: jsonTrade[4],
      Order2: jsonTrade[5],
      Tradetime: jsonTrade[6],
      Direction: jsonTrade[7],
      TakerSide: jsonTrade[8],
      BlockTrade: jsonTrade[9] == 1,
      OrderClientId: jsonTrade[10]
    };
  }

  // lib/services/tradingService.ts
  var _serviceCore9;
  var TradingService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore9);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore9, serviceCore);
    }
    sendOrderList(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "SendOrderList" /* SEND_ORDER_LIST */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    sendCancelList(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "SendCancelList" /* SEND_CANCEL_LIST */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    sendCancelReplaceList(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "SendCancelReplaceList" /* SEND_CANCEL_REPLACE_LIST */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    modifyOrder(request) {
      return __async(this, null, function* () {
        if (!request.OrderId || !request.InstrumentId || !request.Quantity || !request.AccountId) {
          throw new Error("All fields are required for modifying an order.");
        }
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "ModifyOrder" /* MODIFY_ORDER */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    cancelAllOrders(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "CancelAllOrders" /* CANCEL_ALL_ORDERS */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getOrderStatus(params) {
      return __async(this, null, function* () {
        if (!params.AccountId && !params.OrderId) {
          throw new Error("Either AccountId or OrderId is required.");
        }
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetOrderStatus" /* GET_ORDER_STATUS */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getOrdersHistory(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "GetOrdersHistory" /* GET_ORDERS_HISTORY */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getTradesHistory(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "GetTradesHistory" /* GET_TRADES_HISTORY */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getOrderHistoryByOrderId(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "GetOrderHistoryByOrderId" /* GET_ORDER_HISTORY_BY_ORDER_ID */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getTickerHistory(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetTickerHistory" /* GET_TICKER_HISTORY */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response.map((item) => ({
          EndDateTime: item[0],
          // Fecha/hora de cierre en POSIX
          High: item[1],
          // Precio máximo
          Low: item[2],
          // Precio mínimo
          Open: item[3],
          // Precio de apertura
          Close: item[4],
          // Precio de cierre
          Volume: item[5],
          // Volumen total
          Bid: item[6],
          // Mejor precio de compra
          Ask: item[7],
          // Mejor precio de venta
          InstrumentId: item[8],
          // ID del instrumento
          BeginDateTime: item[9]
          // Fecha/hora de inicio en POSIX
        }));
      });
    }
    getLastTrades(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId)
          throw new Error("InstrumentId is required for getting last trades.");
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetLastTrades" /* GET_LAST_TRADES */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response.map((item) => parseIndexTrade(item));
      });
    }
    getLevel1Summary(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetLevel1Summary" /* GET_LEVEL1_SUMMARY */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response.map((data) => JSON.parse(data));
      });
    }
    getLevel1SummaryMin(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetLevel1SummaryMin" /* GET_LEVEL1_SUMMARY_MIN */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response.map((data) => ({
          InstrumentId: data[0],
          InstrumentSymbol: data[1].toString(),
          LastTradedPx: data[2],
          Rolling24HrPxChange: data[3],
          Rolling24HrPxChangePercent: data[4],
          Rolling24HrVolume: data[5]
        }));
      });
    }
    getOpenTradeReports(request) {
      return __async(this, null, function* () {
        if (!request.AccountId) {
          throw new Error(
            "AccountId is required for retrieving open trade reports."
          );
        }
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetOpenTradeReports" /* GET_OPEN_TRADE_REPORTS */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getOrders(request) {
      return __async(this, null, function* () {
        if (!request.AccountId) {
          throw new Error("AccountId is required for retrieving orders.");
        }
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetOrders" /* GET_ORDERS */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getOrderHistory(request) {
      return __async(this, null, function* () {
        if (!request.AccountId) {
          throw new Error("AccountId is required for retrieving order history.");
        }
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetOrderHistory" /* GET_ORDER_HISTORY */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    sendOrder(request) {
      return __async(this, null, function* () {
        if (request.InstrumentId == null || request.AccountId == null || request.TimeInForce == null || request.Side == null || request.OrderType == null) {
          throw new Error(
            "InstrumentId, AccountId, TimeInForce, Side, and OrderType are required"
          );
        }
        if (request.OrderType === 2 /* Limit */ && request.LimitPrice == null) {
          throw new Error("LimitPrice is required for Limit Orders");
        }
        if (request.UseDisplayQuantity && (request.DisplayQuantity == null || request.DisplayQuantity <= 0)) {
          throw new Error(
            "DisplayQuantity must be greater than 0 when UseDisplayQuantity is true"
          );
        }
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "SendOrder" /* SEND_ORDER */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    cancelReplaceOrder(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "CancelReplaceOrder" /* CANCEL_REPLACE_ORDER */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    cancelOrder(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield __privateGet(this, _serviceCore9).request(
          "CancelOrder" /* CANCEL_ORDER */,
          0 /* POST */,
          paramsWithOMSId
        );
      });
    }
    getOpenOrders(params) {
      return __async(this, null, function* () {
        if (!params.AccountId) {
          throw new Error("getOpenOrders requires AccountId.");
        }
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield this["#serviceCore"].request(
          "GetOpenOrders" /* GET_OPEN_ORDERS */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getAccountTrades(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetAccountTrades" /* GET_ACCOUNT_TRADES */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getSummary() {
      return __async(this, null, function* () {
        const response = yield __privateGet(this, _serviceCore9).request(
          "Summary" /* SUMMARY */,
          0 /* POST */
        );
        return response;
      });
    }
    getTicker() {
      return __async(this, null, function* () {
        const response = yield __privateGet(this, _serviceCore9).request(
          "Ticker" /* TICKER */,
          0 /* POST */
        );
        return response;
      });
    }
    getOrderBook(request) {
      return __async(this, null, function* () {
        if (!request.Market_Pair) {
          throw new Error("Market_Pair is required.");
        }
        const response = yield __privateGet(this, _serviceCore9).request(
          "OrderBook" /* ORDER_BOOK */,
          0 /* POST */,
          request
        );
        return response;
      });
    }
    getTrades(params) {
      return __async(this, null, function* () {
        const response = yield __privateGet(this, _serviceCore9).request(
          "Trades" /* TRADES */,
          0 /* POST */,
          params
        );
        return response;
      });
    }
    getL2Snapshot(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId)
          throw new Error(
            "InstrumentId is required for retrieving Level 2 snapshot."
          );
        if (request.Depth <= 0) throw new Error("Depth must be greater than 0.");
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetL2Snapshot" /* GET_L2_SNAPSHOT */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response.map((snapshot) => ({
          MDUpdateID: snapshot[0],
          NumberOfUniqueAccounts: snapshot[1],
          ActionDateTime: snapshot[2],
          ActionType: snapshot[3],
          LastTradePrice: snapshot[4],
          NumberOfOrders: snapshot[5],
          Price: snapshot[6],
          ProductPairCode: snapshot[7],
          Quantity: snapshot[8],
          Side: snapshot[9]
        }));
      });
    }
    getLevel1(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId)
          throw new Error(
            "InstrumentId is required for retrieving Level 1 snapshot."
          );
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetLevel1" /* GET_LEVEL1 */,
          0 /* POST */,
          paramsWithOMSId
        );
        return response;
      });
    }
    getEnums() {
      return __async(this, null, function* () {
        const response = yield __privateGet(this, _serviceCore9).request(
          "GetEnums" /* GET_ENUMS */,
          0 /* POST */
        );
        return response;
      });
    }
  };
  _serviceCore9 = new WeakMap();

  // lib/core/hmac.ts
  var import_crypto = __toESM(__require("crypto"));
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getNonce() {
    return getRandomInt(1e6).toString();
  }
  function sign(apiPublicKey, apiSecretKey, userId, nonce) {
    var message = nonce + userId + apiPublicKey;
    const hmac256 = import_crypto.default.createHmac("sha256", apiSecretKey);
    hmac256.update(message);
    return hmac256.digest("hex");
  }

  // lib/models/index.ts
  var models_exports = {};
  __export(models_exports, {
    AccountType: () => AccountType,
    ActionType: () => ActionType,
    ChangeReason: () => ChangeReason,
    DepositFeeMessages: () => DepositFeeMessages,
    DepositStatus: () => DepositStatus,
    Direction: () => Direction,
    FeeCalcType: () => FeeCalcType,
    FeeProductType: () => FeeProductType,
    FeeType: () => FeeType,
    InstrumentType: () => InstrumentType,
    MakerTaker: () => MakerTaker,
    OrderFlag: () => OrderFlag,
    OrderSide: () => OrderSide,
    OrderState: () => OrderState,
    OrderTypeInt: () => OrderTypeInt,
    OrderTypeStr: () => OrderTypeStr,
    PegPriceType: () => PegPriceType,
    ProductType: () => ProductType,
    ReferenceType: () => ReferenceType,
    RiskType: () => RiskType,
    SessionStatus: () => SessionStatus,
    SideType: () => SideType,
    StandardError: () => StandardError,
    SubscriptionResponse: () => SubscriptionResponse,
    TimeInForce: () => TimeInForce,
    TradeDirection: () => TradeDirection,
    TradeSide: () => TradeSide,
    TransactionReferenceTypes: () => TransactionReferenceTypes,
    TransactionTypes: () => TransactionTypes,
    UnsubscribeLevel2ErrorCode: () => UnsubscribeLevel2ErrorCode,
    UnsubscribeTradesError: () => UnsubscribeTradesError,
    UnsubscriptionResponse: () => UnsubscriptionResponse,
    WithdrawErrorCode: () => WithdrawErrorCode,
    WithdrawFeeMessages: () => WithdrawFeeMessages,
    WithdrawTemplateType: () => WithdrawTemplateType
  });

  // lib/models/common/orderState.ts
  var OrderState = /* @__PURE__ */ ((OrderState2) => {
    OrderState2["Unknown"] = "Unknown";
    OrderState2["Working"] = "Working";
    OrderState2["Rejected"] = "Rejected";
    OrderState2["Canceled"] = "Canceled";
    OrderState2["Expired"] = "Expired";
    OrderState2["FullyExecuted"] = "Fully Executed";
    return OrderState2;
  })(OrderState || {});

  // lib/models/common/orderSide.ts
  var OrderSide = /* @__PURE__ */ ((OrderSide2) => {
    OrderSide2[OrderSide2["Buy"] = 0] = "Buy";
    OrderSide2[OrderSide2["Sell"] = 1] = "Sell";
    return OrderSide2;
  })(OrderSide || {});

  // lib/models/common/changeReason.ts
  var ChangeReason = /* @__PURE__ */ ((ChangeReason2) => {
    ChangeReason2["UNKNOWN"] = "Unknown";
    ChangeReason2["NEWINPUTACCEPTED"] = "NewInputAccepted";
    ChangeReason2["NEWINPUTREJECTED"] = "NewInputRejected";
    ChangeReason2["OTHERREJECTED"] = "OtherRejected";
    ChangeReason2["EXPIRED"] = "Expired";
    ChangeReason2["TRADE"] = "Trade";
    ChangeReason2["SYSTEMCANCELED_NOMOREDMARKET"] = "SystemCanceled_NoMoreMarket";
    ChangeReason2["SYSTEMCANCELED_BELOWMINIMUM"] = "SystemCanceled_BelowMinimum";
    ChangeReason2["SYSTEMCANCELED_PRICECOLLAR"] = "SystemCanceled_PriceCollar";
    ChangeReason2["SYSTEMCANCELED_MARGINFAILED"] = "SystemCanceled_MarginFailed";
    ChangeReason2["USERMODIFIED"] = "UserModified";
    return ChangeReason2;
  })(ChangeReason || {});

  // lib/models/common/makerTaker.ts
  var MakerTaker = /* @__PURE__ */ ((MakerTaker2) => {
    MakerTaker2[MakerTaker2["Unknown"] = 0] = "Unknown";
    MakerTaker2[MakerTaker2["Maker"] = 1] = "Maker";
    MakerTaker2[MakerTaker2["Taker"] = 2] = "Taker";
    return MakerTaker2;
  })(MakerTaker || {});

  // lib/models/enums/accountType.ts
  var AccountType = /* @__PURE__ */ ((AccountType2) => {
    AccountType2["ASSET"] = "Asset";
    AccountType2["LIABILITY"] = "Liability";
    return AccountType2;
  })(AccountType || {});

  // lib/models/enums/actionType.ts
  var ActionType = /* @__PURE__ */ ((ActionType2) => {
    ActionType2[ActionType2["NEW"] = 0] = "NEW";
    ActionType2[ActionType2["UPDATE"] = 1] = "UPDATE";
    ActionType2[ActionType2["DELETION"] = 2] = "DELETION";
    return ActionType2;
  })(ActionType || {});

  // lib/models/enums/depositFeeMessages.ts
  var DepositFeeMessages = /* @__PURE__ */ ((DepositFeeMessages2) => {
    DepositFeeMessages2["Success"] = "Fee calculated successfully";
    DepositFeeMessages2["InvalidRequest"] = "Invalid Request";
    DepositFeeMessages2["AccountOrProductNotFound"] = "Account or Product not found";
    return DepositFeeMessages2;
  })(DepositFeeMessages || {});

  // lib/models/enums/depositStatus.ts
  var DepositStatus = /* @__PURE__ */ ((DepositStatus2) => {
    DepositStatus2["New"] = "New";
    DepositStatus2["Pending"] = "Pending";
    DepositStatus2["FullyProcessed"] = "FullyProcessed";
    DepositStatus2["Error"] = "Error";
    return DepositStatus2;
  })(DepositStatus || {});

  // lib/models/enums/direction.ts
  var Direction = /* @__PURE__ */ ((Direction2) => {
    Direction2[Direction2["NoChange"] = 0] = "NoChange";
    Direction2[Direction2["Uptick"] = 1] = "Uptick";
    Direction2[Direction2["DownTick"] = 2] = "DownTick";
    return Direction2;
  })(Direction || {});

  // lib/models/enums/feeProductType.ts
  var FeeProductType = /* @__PURE__ */ ((FeeProductType2) => {
    FeeProductType2["BASE_PRODUCT"] = "BaseProduct";
    FeeProductType2["SINGLE_PRODUCT"] = "SingleProduct";
    return FeeProductType2;
  })(FeeProductType || {});

  // lib/models/enums/instrumentType.ts
  var InstrumentType = /* @__PURE__ */ ((InstrumentType2) => {
    InstrumentType2["UNKNOWN"] = "Unknown";
    InstrumentType2["STANDARD"] = "Standard";
    return InstrumentType2;
  })(InstrumentType || {});

  // lib/models/enums/orderFlag.ts
  var OrderFlag = /* @__PURE__ */ ((OrderFlag2) => {
    OrderFlag2["NoAccountRiskCheck"] = "NoAccountRiskCheck";
    OrderFlag2["AddedToBook"] = "AddedToBook";
    OrderFlag2["RemovedFromBook"] = "RemovedFromBook";
    OrderFlag2["PostOnly"] = "PostOnly";
    OrderFlag2["Liquidation"] = "Liquidation";
    OrderFlag2["ReverseMarginPosition"] = "ReverseMarginPosition";
    return OrderFlag2;
  })(OrderFlag || {});

  // lib/models/enums/pegPriceType.ts
  var PegPriceType = /* @__PURE__ */ ((PegPriceType2) => {
    PegPriceType2[PegPriceType2["Last"] = 1] = "Last";
    PegPriceType2[PegPriceType2["Bid"] = 2] = "Bid";
    PegPriceType2[PegPriceType2["Ask"] = 3] = "Ask";
    PegPriceType2[PegPriceType2["Midpoint"] = 4] = "Midpoint";
    return PegPriceType2;
  })(PegPriceType || {});

  // lib/models/enums/productType.ts
  var ProductType = /* @__PURE__ */ ((ProductType2) => {
    ProductType2["UNKNOWN"] = "Unknown";
    ProductType2["NATIONAL_CURRENCY"] = "NationalCurrency";
    ProductType2["CRYPTO_CURRENCY"] = "CryptoCurrency";
    ProductType2["CONTRACT"] = "Contract";
    return ProductType2;
  })(ProductType || {});

  // lib/models/enums/referenceType.ts
  var ReferenceType = /* @__PURE__ */ ((ReferenceType2) => {
    ReferenceType2["Withdraw"] = "Withdraw";
    return ReferenceType2;
  })(ReferenceType || {});

  // lib/models/enums/riskType.ts
  var RiskType = /* @__PURE__ */ ((RiskType2) => {
    RiskType2["UNKNOWN"] = "Unknown";
    RiskType2["NORMAL"] = "Normal";
    RiskType2["NO_RISK_CHECK"] = "NoRiskCheck";
    RiskType2["NO_TRADING"] = "NoTrading";
    RiskType2["CREDIT"] = "Credit";
    return RiskType2;
  })(RiskType || {});

  // lib/models/enums/sessionStatus.ts
  var SessionStatus = /* @__PURE__ */ ((SessionStatus2) => {
    SessionStatus2["UNKNOWN"] = "Unknown";
    SessionStatus2["RUNNING"] = "Running";
    SessionStatus2["PAUSED"] = "Paused";
    SessionStatus2["STOPPED"] = "Stopped";
    SessionStatus2["STARTING"] = "Starting";
    SessionStatus2["RUNNING_POST_ONLY"] = "RunningPostOnly";
    return SessionStatus2;
  })(SessionStatus || {});

  // lib/models/enums/sideType.ts
  var SideType = /* @__PURE__ */ ((SideType2) => {
    SideType2["BUY"] = "Buy";
    SideType2["SELL"] = "Sell";
    return SideType2;
  })(SideType || {});

  // lib/models/enums/timeInForce.ts
  var TimeInForce = /* @__PURE__ */ ((TimeInForce2) => {
    TimeInForce2[TimeInForce2["Unknown"] = 0] = "Unknown";
    TimeInForce2[TimeInForce2["GTC"] = 1] = "GTC";
    TimeInForce2[TimeInForce2["OPG"] = 2] = "OPG";
    TimeInForce2[TimeInForce2["IOC"] = 3] = "IOC";
    TimeInForce2[TimeInForce2["FOK"] = 4] = "FOK";
    TimeInForce2[TimeInForce2["GTX"] = 5] = "GTX";
    TimeInForce2[TimeInForce2["GTD"] = 6] = "GTD";
    return TimeInForce2;
  })(TimeInForce || {});

  // lib/models/enums/tradeDirection.ts
  var TradeDirection = /* @__PURE__ */ ((TradeDirection2) => {
    TradeDirection2[TradeDirection2["NoChange"] = 0] = "NoChange";
    TradeDirection2[TradeDirection2["Uptick"] = 1] = "Uptick";
    TradeDirection2[TradeDirection2["DownTick"] = 2] = "DownTick";
    return TradeDirection2;
  })(TradeDirection || {});

  // lib/models/enums/tradeSide.ts
  var TradeSide = /* @__PURE__ */ ((TradeSide2) => {
    TradeSide2[TradeSide2["Buy"] = 0] = "Buy";
    TradeSide2[TradeSide2["Sell"] = 1] = "Sell";
    TradeSide2[TradeSide2["Short"] = 2] = "Short";
    TradeSide2[TradeSide2["Unknown"] = 3] = "Unknown";
    return TradeSide2;
  })(TradeSide || {});

  // lib/models/enums/transactionReferenceTypes.ts
  var TransactionReferenceTypes = /* @__PURE__ */ ((TransactionReferenceTypes2) => {
    TransactionReferenceTypes2["Trade"] = "Trade";
    TransactionReferenceTypes2["Deposit"] = "Deposit";
    TransactionReferenceTypes2["Withdraw"] = "Withdraw";
    TransactionReferenceTypes2["Transfer"] = "Transfer";
    TransactionReferenceTypes2["OrderHold"] = "OrderHold";
    TransactionReferenceTypes2["WithdrawHold"] = "WithdrawHold";
    TransactionReferenceTypes2["DepositHold"] = "DepositHold";
    TransactionReferenceTypes2["MarginHold"] = "MarginHold";
    TransactionReferenceTypes2["ManualHold"] = "ManualHold";
    TransactionReferenceTypes2["ManualEntry"] = "ManualEntry";
    TransactionReferenceTypes2["MarginAcquisition"] = "MarginAcquisition";
    TransactionReferenceTypes2["MarginRelinquish"] = "MarginRelinquish";
    TransactionReferenceTypes2["MarginInterestNetting"] = "MarginInterestNetting";
    TransactionReferenceTypes2["MarginOperatorTransferToMarginAccount"] = "MarginOperatorTransferToMarginAccount";
    TransactionReferenceTypes2["MarginOperatorTransferToAssetAccount"] = "MarginOperatorTransferToAssetAccount";
    TransactionReferenceTypes2["MarginUserTransfer"] = "MarginUserTransfer";
    TransactionReferenceTypes2["MarginPositionReverseTrade"] = "MarginPositionReverseTrade";
    TransactionReferenceTypes2["AffiliateRebate"] = "AffiliateRebate";
    TransactionReferenceTypes2["DistributionEntry"] = "DistributionEntry";
    TransactionReferenceTypes2["TransferHold"] = "TransferHold";
    TransactionReferenceTypes2["AirDrop"] = "AirDrop";
    return TransactionReferenceTypes2;
  })(TransactionReferenceTypes || {});

  // lib/models/enums/transactionTypes.ts
  var TransactionTypes = /* @__PURE__ */ ((TransactionTypes2) => {
    TransactionTypes2["Fee"] = "Fee";
    TransactionTypes2["Trade"] = "Trade";
    TransactionTypes2["Other"] = "Other";
    TransactionTypes2["Reverse"] = "Reverse";
    TransactionTypes2["Hold"] = "Hold";
    TransactionTypes2["Rebate"] = "Rebate";
    TransactionTypes2["MarginAcquisition"] = "MarginAcquisition";
    TransactionTypes2["MarginRelinquishByTrade"] = "MarginRelinquishByTrade";
    TransactionTypes2["MarginInterestTransfer"] = "MarginInterestTransfer";
    TransactionTypes2["MarginOperatorTransferToMarginAccount"] = "MarginOperatorTransferToMarginAccount";
    TransactionTypes2["MarginOperatorTransferToAssetAccount"] = "MarginOperatorTransferToAssetAccount";
    TransactionTypes2["MarginUserTransfer"] = "MarginUserTransfer";
    TransactionTypes2["MarginRelinquishByTransfer"] = "MarginRelinquishByTransfer";
    TransactionTypes2["MarginRelinquishByReverseTrade"] = "MarginRelinquishByReverseTrade";
    TransactionTypes2["Distribution"] = "Distribution";
    TransactionTypes2["Payment"] = "Payment";
    TransactionTypes2["OperatorLend"] = "OperatorLend";
    TransactionTypes2["OperatorReceived"] = "OperatorReceived";
    TransactionTypes2["Rebalance"] = "Rebalance";
    TransactionTypes2["Commission"] = "Commission";
    TransactionTypes2["AirDrop"] = "AirDrop";
    return TransactionTypes2;
  })(TransactionTypes || {});

  // lib/models/enums/unsubscribeLevel2ErrorCode.ts
  var UnsubscribeLevel2ErrorCode = /* @__PURE__ */ ((UnsubscribeLevel2ErrorCode2) => {
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["SUCCESS"] = 0] = "SUCCESS";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["NOT_AUTHORIZED"] = 20] = "NOT_AUTHORIZED";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["INVALID_REQUEST"] = 100] = "INVALID_REQUEST";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["OPERATION_FAILED"] = 101] = "OPERATION_FAILED";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["SERVER_ERROR"] = 102] = "SERVER_ERROR";
    UnsubscribeLevel2ErrorCode2[UnsubscribeLevel2ErrorCode2["RESOURCE_NOT_FOUND"] = 104] = "RESOURCE_NOT_FOUND";
    return UnsubscribeLevel2ErrorCode2;
  })(UnsubscribeLevel2ErrorCode || {});

  // lib/models/enums/unsubscribeTradesError.ts
  var UnsubscribeTradesError = /* @__PURE__ */ ((UnsubscribeTradesError2) => {
    UnsubscribeTradesError2[UnsubscribeTradesError2["NotAuthorized"] = 20] = "NotAuthorized";
    UnsubscribeTradesError2[UnsubscribeTradesError2["InvalidRequest"] = 100] = "InvalidRequest";
    UnsubscribeTradesError2[UnsubscribeTradesError2["OperationFailed"] = 101] = "OperationFailed";
    UnsubscribeTradesError2[UnsubscribeTradesError2["ServerError"] = 102] = "ServerError";
    UnsubscribeTradesError2[UnsubscribeTradesError2["ResourceNotFound"] = 104] = "ResourceNotFound";
    return UnsubscribeTradesError2;
  })(UnsubscribeTradesError || {});

  // lib/models/enums/withdrawErrorCode.ts
  var WithdrawErrorCode = /* @__PURE__ */ ((WithdrawErrorCode2) => {
    WithdrawErrorCode2[WithdrawErrorCode2["NoError"] = 0] = "NoError";
    WithdrawErrorCode2[WithdrawErrorCode2["NotAuthorized"] = 20] = "NotAuthorized";
    WithdrawErrorCode2[WithdrawErrorCode2["InvalidRequest"] = 100] = "InvalidRequest";
    WithdrawErrorCode2[WithdrawErrorCode2["OperationFailed"] = 101] = "OperationFailed";
    WithdrawErrorCode2[WithdrawErrorCode2["ServerError"] = 102] = "ServerError";
    WithdrawErrorCode2[WithdrawErrorCode2["ResourceNotFound"] = 104] = "ResourceNotFound";
    return WithdrawErrorCode2;
  })(WithdrawErrorCode || {});

  // lib/models/enums/withdrawFeeMessages.ts
  var WithdrawFeeMessages = /* @__PURE__ */ ((WithdrawFeeMessages2) => {
    WithdrawFeeMessages2["Success"] = "Fee calculated successfully";
    WithdrawFeeMessages2["InvalidRequest"] = "Invalid Request";
    WithdrawFeeMessages2["AccountOrProductNotFound"] = "Account or Product not found";
    return WithdrawFeeMessages2;
  })(WithdrawFeeMessages || {});

  // lib/models/enums/withdrawTemplateType.ts
  var WithdrawTemplateType = /* @__PURE__ */ ((WithdrawTemplateType2) => {
    WithdrawTemplateType2["ToExternalBitcoinAddress"] = "ToExternalBitcoinAddress";
    WithdrawTemplateType2["ToInternalAccount"] = "ToInternalAccount";
    WithdrawTemplateType2["ToBankAccount"] = "ToBankAccount";
    return WithdrawTemplateType2;
  })(WithdrawTemplateType || {});

  // lib/models/response/getAccountFees.ts
  var FeeCalcType = /* @__PURE__ */ ((FeeCalcType2) => {
    FeeCalcType2["Flat"] = "Flat";
    FeeCalcType2["Percentage"] = "Percentage";
    return FeeCalcType2;
  })(FeeCalcType || {});
  var FeeType = /* @__PURE__ */ ((FeeType2) => {
    FeeType2["Flat"] = "Flat";
    FeeType2["MakerFee"] = "MakerFee";
    FeeType2["TakerFee"] = "TakerFee";
    FeeType2["PeggedProductFee"] = "PeggedProductFee";
    FeeType2["AffiliateFee"] = "AffiliateFee";
    return FeeType2;
  })(FeeType || {});

  // lib/models/notbankError.ts
  var NotbankError = class extends Error {
  };

  // lib/models/standardError.ts
  var StandardError = class extends NotbankError {
    constructor(standardResponse) {
      var errMsg = `Standard Error (code=${standardResponse.errorcode})`;
      if (standardResponse.errormsg) {
        errMsg += ". " + standardResponse.errormsg;
      }
      if (standardResponse.detail) {
        errMsg += ". " + standardResponse.detail;
      }
      super(errMsg);
      this.errorcode = standardResponse.errorcode || standardResponse.statusCode;
      this.errormsg = standardResponse.errormsg;
      this.detail = standardResponse.detail;
    }
  };

  // lib/models/subscriptionResponse.ts
  var UnsubscriptionResponse = class {
  };

  // lib/models/unsubscriptionResponse.ts
  var SubscriptionResponse = class {
  };

  // lib/core/http/httpClient.ts
  var _aptoken, _HOST;
  var HttpClient = class {
    constructor(domain) {
      __privateAdd(this, _aptoken);
      __privateAdd(this, _HOST);
      __privateSet(this, _aptoken, null);
      __privateSet(this, _HOST, "https://" + domain + "/ap/");
    }
    request(endpoint, requestType, params) {
      return __async(this, null, function* () {
        if (requestType === 1 /* GET */) {
          return this.requestGet(endpoint, { params });
        }
        if (requestType === 0 /* POST */) {
          return this.requestPost(endpoint, params);
        }
        throw new Error(`Request type not implemented. ${requestType}`);
      });
    }
    requestPost(endpoint, message) {
      return __async(this, null, function* () {
        var response = yield fetch(this.getUrl(endpoint), {
          method: "POST",
          body: message ? JSON.stringify(message) : null,
          headers: this.getHeaders()
        });
        return this.handleResponse(response);
      });
    }
    requestGet(_0) {
      return __async(this, arguments, function* (endpoint, config = {}) {
        var response = yield fetch(
          this.getUrlWithSearchParams(endpoint, config.params),
          {
            method: "GET",
            headers: this.getHeaders(config.extraHeaders)
          }
        );
        return yield this.handleResponse(response);
      });
    }
    handleResponse(response) {
      return __async(this, null, function* () {
        if (response.status >= 300 || response.status < 200) {
          throw new Error(
            `http error (${response.status}) not a successfull response. ${response.text()}`
          );
        }
        var jsonResponse = yield response.json();
        var standardResponse = jsonResponse;
        if ((standardResponse == null ? void 0 : standardResponse.result) === false && (standardResponse == null ? void 0 : standardResponse.errorcode) != null) {
          throw new StandardError(standardResponse);
        }
        return jsonResponse;
      });
    }
    getHeaders(extraHeaders) {
      var headers = {
        "Content-type": "application/json",
        charset: "UTF-8"
      };
      if (__privateGet(this, _aptoken) != null) {
        headers["aptoken"] = __privateGet(this, _aptoken);
      }
      if (extraHeaders) {
        return __spreadValues(__spreadValues({}, headers), extraHeaders);
      }
      return headers;
    }
    getUrlWithSearchParams(endpoint, params) {
      if (params) {
        return this.getUrl(endpoint) + "?" + new URLSearchParams(params);
      }
      return this.getUrl(endpoint);
    }
    authenticate(params) {
      return __async(this, null, function* () {
        var response = yield this.requestGet("Authenticate" /* AUTHENTICATE */, {
          extraHeaders: params
        });
        __privateSet(this, _aptoken, response.SessionToken);
      });
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        var response = yield this.requestGet("AuthenticateUser" /* AUTHENTICATE_USER */, {
          extraHeaders: params
        });
        __privateSet(this, _aptoken, response.SessionToken);
      });
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
      throw new Error("Method not implemented.");
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
      throw new Error("Method not implemented.");
    }
    setResponseHandler(responseHandler) {
      throw new Error("Method not implemented.");
    }
    setResponseHandlers(responseHandlers) {
      throw new Error("Method not implemented.");
    }
    getUrl(endpoint) {
      return __privateGet(this, _HOST) + endpoint;
    }
  };
  _aptoken = new WeakMap();
  _HOST = new WeakMap();

  // lib/services/httpServiceFactory.ts
  var DEFAULT_DOMAIN = "api.notbank.exchange";
  var _httpCore;
  var HttpServiceFactory = class {
    constructor(domain) {
      __privateAdd(this, _httpCore);
      const finalDomain = domain || DEFAULT_DOMAIN;
      __privateSet(this, _httpCore, new HttpClient(finalDomain));
    }
    authenticate(params) {
      return __async(this, null, function* () {
        var nonce = getNonce();
        var signature = sign(
          params.ApiPublicKey,
          params.ApiSecretKey,
          params.UserId,
          nonce
        );
        yield __privateGet(this, _httpCore).authenticate({
          ApiKey: params.ApiPublicKey,
          Signature: signature,
          UserId: params.UserId,
          Nonce: nonce
        });
      });
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        var nonce = getNonce();
        var signature = sign(
          params.ApiPublicKey,
          params.ApiSecretKey,
          params.UserId,
          nonce
        );
        yield __privateGet(this, _httpCore).authenticateUser({
          ApiKey: params.ApiPublicKey,
          Signature: signature,
          UserId: params.UserId,
          Nonce: nonce
        });
      });
    }
    newAccountService() {
      return new AccountService(__privateGet(this, _httpCore));
    }
    newAuthService() {
      return new AuthService(__privateGet(this, _httpCore));
    }
    newFeeService() {
      return new FeeService(__privateGet(this, _httpCore));
    }
    newInstrumentService() {
      return new InstrumentService(__privateGet(this, _httpCore));
    }
    newProductService() {
      return new ProductService(__privateGet(this, _httpCore));
    }
    newReportService() {
      return new ReportService(__privateGet(this, _httpCore));
    }
    newSystemService() {
      return new SystemService(__privateGet(this, _httpCore));
    }
    newTradingService() {
      return new TradingService(__privateGet(this, _httpCore));
    }
    newUserService() {
      return new UserService(__privateGet(this, _httpCore));
    }
  };
  _httpCore = new WeakMap();

  // lib/core/websocket/websocketClient.ts
  var import_universal_websocket_client = __toESM(require_browser());

  // lib/core/websocket/callbackManager.ts
  var _subscriptionCallbacks, _callbacks, _sequenceNumber;
  var CallbackManager = class {
    constructor() {
      __privateAdd(this, _subscriptionCallbacks);
      __privateAdd(this, _callbacks);
      __privateAdd(this, _sequenceNumber);
      __privateSet(this, _subscriptionCallbacks, {});
      __privateSet(this, _callbacks, {});
      __privateSet(this, _sequenceNumber, 2);
    }
    putCallback(callback) {
      var sequenceNumber = __privateGet(this, _sequenceNumber);
      __privateGet(this, _callbacks)[sequenceNumber] = callback;
      __privateSet(this, _sequenceNumber, __privateGet(this, _sequenceNumber) + 2);
      return sequenceNumber;
    }
    popCallback(sequenceNumber) {
      let callback = __privateGet(this, _callbacks)[sequenceNumber];
      delete __privateGet(this, _callbacks)[sequenceNumber];
      return callback != null ? callback : (o) => null;
    }
    addSubscriptionCallback(callbackId, callback) {
      __privateGet(this, _subscriptionCallbacks)[callbackId] = callback;
    }
    getSubscriptionCallback(callbackIdentifier) {
      let handler = __privateGet(this, _subscriptionCallbacks)[callbackIdentifier];
      return handler || null;
    }
    removeSubscriptionCallback(callbackIds) {
      callbackIds.map(
        (callbackId) => delete __privateGet(this, _subscriptionCallbacks)[callbackId]
      );
    }
  };
  _subscriptionCallbacks = new WeakMap();
  _callbacks = new WeakMap();
  _sequenceNumber = new WeakMap();

  // lib/constants/errorCode.ts
  var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
    ErrorCode2[ErrorCode2["UNDEFINED"] = -1] = "UNDEFINED";
    ErrorCode2[ErrorCode2["NOT_AN_ERROR"] = 0] = "NOT_AN_ERROR";
    ErrorCode2[ErrorCode2["NOT_AUTHORIZED"] = 20] = "NOT_AUTHORIZED";
    ErrorCode2[ErrorCode2["INVALID_RESPONSE"] = 100] = "INVALID_RESPONSE";
    ErrorCode2[ErrorCode2["OPERATION_FAILED"] = 101] = "OPERATION_FAILED";
    ErrorCode2[ErrorCode2["SERVER_ERROR"] = 102] = "SERVER_ERROR";
    ErrorCode2[ErrorCode2["RESOURCE_NOT_FOUND"] = 104] = "RESOURCE_NOT_FOUND";
    return ErrorCode2;
  })(ErrorCode || {});
  var errorCode_default = ErrorCode;

  // lib/core/websocket/SubscriptionIdentifier.ts
  var _mapping, _SubscriptionIdentifier_static, getIdPart_fn, getTickerName_fn, getLevel1TickerName_fn, getLevel2TickerName_fn, getSocketTradeName_fn, getAccountEventName_fn, getOrderEventName_fn, getValueFromList_fn, getInstrumentedId_fn, getInstrumentedIdFromInstrument_fn, getAccountId_fn, getAccountIdFromAccount_fn;
  var _SubscriptionIdentifier = class _SubscriptionIdentifier {
    static get(eventName, firstIdentifier = null, secondIdentifier = null) {
      var _a, _b;
      return eventName + __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getIdPart_fn).call(_a, firstIdentifier) + __privateMethod(_b = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getIdPart_fn).call(_b, secondIdentifier);
    }
    static getFromMessageFrame(message) {
      var _a, _b, _c;
      return (_c = (_b = (_a = __privateGet(this, _mapping))[message.n]) == null ? void 0 : _b.call(_a, message.n, message.o)) != null ? _c : message.n;
    }
  };
  _mapping = new WeakMap();
  _SubscriptionIdentifier_static = new WeakSet();
  getIdPart_fn = function(firstIdentifier) {
    return firstIdentifier != null ? "_" + firstIdentifier : "";
  };
  getTickerName_fn = function(eventName, payloadStr) {
    var _a;
    const instrumentId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getValueFromList_fn).call(_a, payloadStr, 8);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  };
  getLevel1TickerName_fn = function(eventName, payloadStr) {
    var _a;
    return eventName + "_" + __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getInstrumentedId_fn).call(_a, payloadStr);
  };
  getLevel2TickerName_fn = function(eventName, payloadStr) {
    var _a;
    let instrumentId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getValueFromList_fn).call(_a, payloadStr, 7);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  };
  getSocketTradeName_fn = function(eventName, payloadStr) {
    var _a;
    const instrumentId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getValueFromList_fn).call(_a, payloadStr, 1);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  };
  getAccountEventName_fn = function(eventName, payloadStr) {
    var _a;
    let accountId = __privateMethod(_a = _SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountId_fn).call(_a, payloadStr);
    if (accountId != null) {
      return eventName + "_" + accountId;
    }
    accountId = __privateMethod(this, _SubscriptionIdentifier_static, getAccountIdFromAccount_fn).call(this, payloadStr);
    if (accountId != null) {
      return eventName + "_" + accountId;
    }
    return eventName;
  };
  getOrderEventName_fn = function(eventName, payloadStr) {
    const data = JSON.parse(payloadStr);
    let identifier = eventName + "_" + data.AccountId;
    if (data.InstrumentId) {
      return identifier + "_" + data.InstrumentId;
    }
  };
  getValueFromList_fn = function(payloadStr, index) {
    const data = JSON.parse(payloadStr);
    if (data.length == 0) {
      return null;
    }
    if (data[0].length <= index) {
      return null;
    }
    return data[0][index];
  };
  getInstrumentedId_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.InstrumentId;
  };
  getInstrumentedIdFromInstrument_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.Instrument;
  };
  getAccountId_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.AccountId;
  };
  getAccountIdFromAccount_fn = function(payloadStr) {
    const data = JSON.parse(payloadStr);
    return data.Account;
  };
  __privateAdd(_SubscriptionIdentifier, _SubscriptionIdentifier_static);
  __privateAdd(_SubscriptionIdentifier, _mapping, {
    ["SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel1TickerName_fn),
    ["Level1UpdateEvent" /* UPDATE_LEVEL1 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel1TickerName_fn),
    ["SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel2TickerName_fn),
    ["Level2UpdateEvent" /* UPDATE_LEVEL2 */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getLevel2TickerName_fn),
    ["SubscribeTicker" /* SUBSCRIBE_TICKER */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getTickerName_fn),
    ["TickerDataUpdateEvent" /* UPDATE_TICKER */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getTickerName_fn),
    ["SubscribeTrades" /* SUBSCRIBE_TRADES */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getSocketTradeName_fn),
    ["SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getOrderEventName_fn),
    ["TransactionEvent" /* ACCOUNT_EVENT_TRANSACTION */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["WithdrawTicketUpdateEvent" /* ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["AccountPositionEvent" /* ACCOUNT_EVENT_ACCOUNT_POSITION */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["OrderTradeEvent" /* ACCOUNT_EVENT_ORDER_TRADE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["DepositTicketUpdateEvent" /* ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["AccountInfoUpdateEvent" /* ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["CancelOrderRejectEvent" /* ACCOUNT_EVENT_CANCEL_ORDER_REJECT */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn),
    ["DepositEvent" /* ACCOUNT_EVENT_DEPOSIT */]: __privateMethod(_SubscriptionIdentifier, _SubscriptionIdentifier_static, getAccountEventName_fn)
  });
  var SubscriptionIdentifier = _SubscriptionIdentifier;

  // lib/core/websocket/websocketClient.ts
  var emptyFn = (o) => {
  };
  var _domain, _callbackManager, _websocket, _peekMessageIn, _peekMessageOut, _WebsocketClient_instances, getSubscriptionCallbackId_fn, handleMessage_fn, request_fn, handleRequestResponse_fn, requestToCallback_fn;
  var WebsocketClient = class {
    constructor(params) {
      __privateAdd(this, _WebsocketClient_instances);
      __privateAdd(this, _domain);
      __privateAdd(this, _callbackManager);
      __privateAdd(this, _websocket);
      __privateAdd(this, _peekMessageIn);
      __privateAdd(this, _peekMessageOut);
      __privateSet(this, _domain, params.domain);
      __privateSet(this, _callbackManager, new CallbackManager());
      __privateSet(this, _peekMessageIn, params.peekMessageIn || ((_) => {
      }));
      __privateSet(this, _peekMessageOut, params.peekMessageOut || ((_) => {
      }));
    }
    // TODO: maybe use better names than hook: websockethooks
    connect() {
      return __async(this, arguments, function* (hooks = {}) {
        __privateSet(this, _websocket, new import_universal_websocket_client.default("wss://" + __privateGet(this, _domain) + "/wsgateway"));
        __privateGet(this, _websocket).onopen = (event) => {
          var _a;
          return (_a = hooks.onOpen) == null ? void 0 : _a.call(hooks, event);
        };
        __privateGet(this, _websocket).onclose = (event) => {
          var _a;
          return (_a = hooks.onClose) == null ? void 0 : _a.call(hooks, event);
        };
        __privateGet(this, _websocket).onerror = (event) => {
          var _a;
          return (_a = hooks.onError) == null ? void 0 : _a.call(hooks, event);
        };
        __privateGet(this, _websocket).addEventListener("message", (event) => {
          const messageFrame = JSON.parse(event.data);
          __privateMethod(this, _WebsocketClient_instances, handleMessage_fn).call(this, messageFrame);
        });
        __privateGet(this, _websocket).addEventListener(
          "message",
          (event) => {
            var _a;
            return (_a = hooks.onMessage) == null ? void 0 : _a.call(hooks, event);
          }
        );
        return new Promise(
          (resolve, _) => __privateGet(this, _websocket).addEventListener("open", (_2) => resolve())
        );
      });
    }
    close() {
      __privateGet(this, _websocket).close();
    }
    get readyState() {
      return __privateGet(this, _websocket).readyState;
    }
    request(endpoint, requestType, message) {
      return __privateMethod(this, _WebsocketClient_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
      return __async(this, null, function* () {
        subscriptionCallbacks.map(
          (handler) => __privateGet(this, _callbackManager).addSubscriptionCallback(
            SubscriptionIdentifier.get(
              handler.eventName,
              firstIdentifier,
              secondIdentifier
            ),
            handler.eventHandler
          )
        );
        return __privateMethod(this, _WebsocketClient_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callbackIds) {
      return __async(this, null, function* () {
        __privateGet(this, _callbackManager).removeSubscriptionCallback(
          callbackIds.map(
            (callbackId) => SubscriptionIdentifier.get(
              callbackId,
              firstIdentifier,
              secondIdentifier
            )
          )
        );
        return yield __privateMethod(this, _WebsocketClient_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    closeConnection() {
      __privateGet(this, _websocket).socket.close();
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        yield this.request("AuthenticateUser" /* AUTHENTICATE_USER */, 2 /* NONE */, params);
      });
    }
  };
  _domain = new WeakMap();
  _callbackManager = new WeakMap();
  _websocket = new WeakMap();
  _peekMessageIn = new WeakMap();
  _peekMessageOut = new WeakMap();
  _WebsocketClient_instances = new WeakSet();
  getSubscriptionCallbackId_fn = function(message) {
    return SubscriptionIdentifier.getFromMessageFrame(message);
  };
  handleMessage_fn = function(message) {
    __privateGet(this, _peekMessageIn).call(this, message);
    const callback = __privateGet(this, _callbackManager).popCallback(message.i);
    if (callback != null) {
      callback(message);
      if (isErrorMessage(message)) {
        return;
      }
    }
    const callbackId = __privateMethod(this, _WebsocketClient_instances, getSubscriptionCallbackId_fn).call(this, message);
    const subscriptionCallback = __privateGet(this, _callbackManager).getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
      subscriptionCallback(message);
      return;
    }
  };
  request_fn = function(endpoint, message, messageType = 0 /* REQUEST */) {
    return new Promise((resolve, reject) => {
      __privateMethod(this, _WebsocketClient_instances, requestToCallback_fn).call(this, endpoint, JSON.stringify(message) || "{}", messageType, __privateMethod(this, _WebsocketClient_instances, handleRequestResponse_fn).call(this, reject, resolve));
    });
  };
  handleRequestResponse_fn = function(reject, resolve) {
    return (response) => {
      try {
        var payload = JSON.parse(response.o);
      } catch (e) {
        reject(newStandardErrorFromString(response.o));
        return;
      }
      if (response.m === 5 /* ERROR */) {
        reject(new StandardError(payload));
        return;
      }
      var standardResponse = payload;
      if ((standardResponse == null ? void 0 : standardResponse.result) === false && (standardResponse == null ? void 0 : standardResponse.errormsg) != null) {
        reject(new StandardError(payload));
        return;
      }
      resolve(payload);
    };
  };
  requestToCallback_fn = function(endpoint, message, messageType, callback = emptyFn) {
    const sequenceNumber = __privateGet(this, _callbackManager).putCallback(callback);
    const frame = {
      m: messageType,
      i: sequenceNumber,
      n: endpoint,
      o: message
    };
    __privateGet(this, _peekMessageOut).call(this, frame);
    __privateGet(this, _websocket).send(JSON.stringify(frame));
  };
  function newStandardErrorFromString(errorStr) {
    return new StandardError({
      result: false,
      errormsg: errorStr,
      errorcode: errorCode_default.UNDEFINED,
      statusCode: -1,
      detail: ""
    });
  }
  function isErrorMessage(message) {
    let isErrorType = message.m === 5 /* ERROR */;
    if (isErrorType) {
      return true;
    }
    try {
      let standardError = message.o;
      return standardError.result == false;
    } catch (e) {
      return false;
    }
  }

  // lib/utils/subscriptionCallbacksHandler.ts
  function newMaybeHandler(eventName, recordHandler) {
    if (recordHandler == null) {
      return null;
    }
    return newHandler(eventName, recordHandler);
  }
  function newHandler(eventName, recordHandler) {
    return {
      eventName,
      eventHandler: (messageFrame) => recordHandler(parseRecord(messageFrame.o))
    };
  }
  function parseRecord(jsonData) {
    return JSON.parse(jsonData);
  }

  // lib/services/subscriptionService.ts
  var _serviceCore10;
  var SubscriptionService = class {
    constructor(serviceCore) {
      __privateAdd(this, _serviceCore10);
      this.OMS_ID = 1;
      __privateSet(this, _serviceCore10, serviceCore);
    }
    subscribeLevel1(request, snapshotHandler, updateHandler) {
      return __async(this, null, function* () {
        if (!request.InstrumentId && !request.Symbol)
          throw new Error(
            "Either InstrumentId or Symbol must be specified for Level1 subscription."
          );
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore10).subscribe(
          "SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          [
            newHandler("SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */, snapshotHandler),
            newHandler("Level1UpdateEvent" /* UPDATE_LEVEL1 */, updateHandler)
          ]
        );
      });
    }
    unsubscribeLevel1(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId && !request.Symbol)
          throw new Error(
            "Either InstrumentId or Symbol must be specified for Level1 unsubscription."
          );
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield __privateGet(this, _serviceCore10).unsubscribe(
          "UnsubscribeLevel1" /* UNSUBSCRIBE_LEVEL1 */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          ["SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */, "UnsubscribeLevel1" /* UNSUBSCRIBE_LEVEL1 */]
        );
      });
    }
    subscribeLevel2(request, snapshotHandler, updateHandler) {
      return __async(this, null, function* () {
        if (!request.InstrumentId && !request.Symbol)
          throw new Error(
            "Either InstrumentId or Symbol must be specified for Level2 subscription."
          );
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore10).subscribe(
          "SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */,
          request.InstrumentId,
          null,
          requestWithOMSId,
          [
            newHandler("SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */, snapshotHandler),
            newHandler("Level2UpdateEvent" /* UPDATE_LEVEL2 */, updateHandler)
          ]
        );
      });
    }
    /**
     * This TypeScript function unsubscribes from Level2 data using WebSocket communication.
     * @param {UnsubscribeLevel2Request} request - The `unsubscribeLevel2` function takes a
     * `UnsubscribeLevel2Request` object as a parameter. This object should contain the following
     * properties:
     * @returns The `unsubscribeLevel2` method is returning a Promise that resolves to a
     * `void` object.
     */
    unsubscribeLevel2(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId && !request.Symbol)
          throw new Error(
            "Either InstrumentId or Symbol must be specified for Level2 unsubscription."
          );
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield __privateGet(this, _serviceCore10).unsubscribe(
          "UnsubscribeLevel2" /* UNSUBSCRIBE_LEVEL2 */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          [
            SubscriptionIdentifier.get(
              "SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */,
              request.InstrumentId
            )
          ]
        );
      });
    }
    /**
     * Suscribe a eventos de trades para un instrumento específico.
     * @param request Parámetros de la suscripción.
     * @param eventHandlers Manejadores de eventos para procesar los trades.
     */
    subscribeTrades(request, subcriptionHandler) {
      return __async(this, null, function* () {
        if (!request.InstrumentId) {
          throw new Error("InstrumentId is required for subscribing to trades.");
        }
        if (!request.IncludeLastCount || request.IncludeLastCount < 0) {
          throw new Error("IncludeLastCount must be a non-negative number.");
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore10).subscribe(
          "SubscribeTrades" /* SUBSCRIBE_TRADES */,
          request.InstrumentId,
          null,
          requestWithOMSId,
          [
            newHandler(
              "SubscribeTrades" /* SUBSCRIBE_TRADES */,
              (mapTrade) => subcriptionHandler(parseIndexTrade(mapTrade))
            )
          ]
        );
      });
    }
    /**
     * Desuscribe de eventos de trades para un instrumento específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeTrades(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId) {
          throw new Error(
            "InstrumentId is required for unsubscribing from trades."
          );
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield __privateGet(this, _serviceCore10).unsubscribe(
          "UnsubscribeTrades" /* UNSUBSCRIBE_TRADES */,
          request.InstrumentId,
          null,
          requestWithOMSId,
          ["SubscribeTrades" /* SUBSCRIBE_TRADES */]
        );
      });
    }
    subscribeTicker(request, snapshotHandler, updateHandler) {
      return __async(this, null, function* () {
        if (!request.InstrumentId) {
          throw new Error("InstrumentId is required for subscribing from ticker.");
        }
        if (!request.Interval) {
          throw new Error("Interval is required for subscribing from ticker.");
        }
        if (!request.IncludeLastCount) {
          throw new Error(
            "IncludeLastCount is required for subscribing from ticker."
          );
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore10).subscribe(
          "SubscribeTicker" /* SUBSCRIBE_TICKER */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          [
            newHandler("SubscribeTicker" /* SUBSCRIBE_TICKER */, snapshotHandler),
            newHandler(
              "TickerDataUpdateEvent" /* UPDATE_TICKER */ + "_" + request.InstrumentId,
              updateHandler
            )
          ]
        );
      });
    }
    /**
     * Desuscribe del feed de datos de mercado de un ticker específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeTicker(request) {
      return __async(this, null, function* () {
        if (!request.InstrumentId) {
          throw new Error(
            "InstrumentId is required for unsubscribing from ticker."
          );
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield __privateGet(this, _serviceCore10).unsubscribe(
          "UnsubscribeTicker" /* UNSUBSCRIBE_TICKER */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          ["SubscribeTicker" /* SUBSCRIBE_TICKER */]
        );
      });
    }
    subscribeAccountEvents(request, eventHandlers) {
      return __async(this, null, function* () {
        if (!request.AccountId)
          throw new Error(
            "AccountId is required for subscribing to account events."
          );
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore10).subscribe(
          "SubscribeAccountEvents" /* SUBSCRIBE_ACCOUNT_EVENTS */,
          request.AccountId,
          null,
          requestWithOMSId,
          [
            newMaybeHandler(
              "WithdrawTicketUpdateEvent" /* ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE */,
              eventHandlers.withdrawTicketUpdateEventHandler || null
            ),
            newMaybeHandler(
              "OrderTradeEvent" /* ACCOUNT_EVENT_ORDER_TRADE */,
              eventHandlers.orderTradeEventHandler || null
            ),
            newMaybeHandler(
              "OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */,
              eventHandlers.orderStateEventHandler || null
            ),
            newMaybeHandler(
              "DepositTicketUpdateEvent" /* ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE */,
              eventHandlers.depositTicketUpdateEventHandler || null
            ),
            newMaybeHandler(
              "AccountPositionEvent" /* ACCOUNT_EVENT_ACCOUNT_POSITION */,
              eventHandlers.accountPositionEventHandler || null
            ),
            newMaybeHandler(
              "AccountInfoUpdateEvent" /* ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE */,
              eventHandlers.accountInfoUpdateEventHandler || null
            ),
            newMaybeHandler(
              "CancelOrderRejectEvent" /* ACCOUNT_EVENT_CANCEL_ORDER_REJECT */,
              eventHandlers.cancelOrderRejectEventHandler || null
            ),
            newMaybeHandler(
              "DepositEvent" /* ACCOUNT_EVENT_DEPOSIT */,
              eventHandlers.depositEventHandler || null
            ),
            newMaybeHandler(
              "TransactionEvent" /* ACCOUNT_EVENT_TRANSACTION */,
              eventHandlers.transactionEventHandler || null
            )
          ].filter((handler) => handler != null)
        );
      });
    }
    /**
     * Desuscribe de eventos de cuenta para un instrumento específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeAccountEvents(request) {
      return __async(this, null, function* () {
        if (!request.AccountId) {
          throw new Error(
            "AccountId is required for unsubscribing from account events."
          );
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield __privateGet(this, _serviceCore10).unsubscribe(
          "UnsubscribeAccountEvents" /* UNSUBSCRIBE_ACCOUNT_EVENTS */,
          request.AccountId,
          null,
          requestWithOMSId,
          [
            "WithdrawTicketUpdateEvent" /* ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE */,
            "OrderTradeEvent" /* ACCOUNT_EVENT_ORDER_TRADE */,
            "OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */,
            "DepositTicketUpdateEvent" /* ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE */,
            "AccountPositionEvent" /* ACCOUNT_EVENT_ACCOUNT_POSITION */,
            "AccountInfoUpdateEvent" /* ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE */,
            "CancelOrderRejectEvent" /* ACCOUNT_EVENT_CANCEL_ORDER_REJECT */,
            "DepositEvent" /* ACCOUNT_EVENT_DEPOSIT */,
            "TransactionEvent" /* ACCOUNT_EVENT_TRANSACTION */
          ]
        );
      });
    }
    subscribeOrderStateEvents(request, subscriptionHandler) {
      return __async(this, null, function* () {
        if (!request.AccountId) {
          throw new Error(
            "AccountId is required for subscribing to order state events."
          );
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return yield __privateGet(this, _serviceCore10).subscribe(
          "SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */,
          request.AccountId,
          request.InstrumentId || null,
          requestWithOMSId,
          [
            newHandler(
              "OrderStateEvent" /* ACCOUNT_EVENT_ORDER_STATE */,
              subscriptionHandler
            )
          ]
        );
      });
    }
    /**
     * Desuscribe de eventos de estado de órdenes para una cuenta específica.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeOrderStateEvents(request) {
      return __async(this, null, function* () {
        if (!request.AccountId) {
          throw new Error(
            "AccountId is required for unsubscribing from order state events."
          );
        }
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield __privateGet(this, _serviceCore10).unsubscribe(
          "UnsubscribeOrderStateEvents" /* UNSUBSCRIBE_ORDER_STATE_EVENTS */,
          request.AccountId,
          request.InstrumentId || null,
          requestWithOMSId,
          ["SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */]
        );
      });
    }
  };
  _serviceCore10 = new WeakMap();

  // lib/services/websocketServicesFactory.ts
  var DEFAULT_DOMAIN2 = "api.notbank.exchange";
  var _websocketClient;
  var WebsocketServiceFactory = class {
    constructor(params) {
      __privateAdd(this, _websocketClient);
      const finalDomain = (params == null ? void 0 : params.domain) || DEFAULT_DOMAIN2;
      __privateSet(this, _websocketClient, new WebsocketClient({
        domain: finalDomain,
        peekMessageIn: params == null ? void 0 : params.peekMessageIn,
        peekMessageOut: params == null ? void 0 : params.peekMessageOut
      }));
    }
    connect(hooks = {}) {
      return __privateGet(this, _websocketClient).connect(hooks);
    }
    close() {
      __privateGet(this, _websocketClient).close();
    }
    get isConnecting() {
      return __privateGet(this, _websocketClient).readyState === WebSocket.CONNECTING;
    }
    get isConnected() {
      return __privateGet(this, _websocketClient).readyState === WebSocket.OPEN;
    }
    get isClosing() {
      return __privateGet(this, _websocketClient).readyState === WebSocket.CLOSING;
    }
    get isClosed() {
      return __privateGet(this, _websocketClient).readyState === WebSocket.CLOSED;
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        var nonce = getNonce();
        var signature = sign(
          params.ApiPublicKey,
          params.ApiSecretKey,
          params.UserId,
          nonce
        );
        yield __privateGet(this, _websocketClient).authenticateUser({
          ApiKey: params.ApiPublicKey,
          Signature: signature,
          UserId: params.UserId,
          Nonce: nonce
        });
      });
    }
    newAccountService() {
      return new AccountService(__privateGet(this, _websocketClient));
    }
    newAuthService() {
      return new AuthService(__privateGet(this, _websocketClient));
    }
    newFeeService() {
      return new FeeService(__privateGet(this, _websocketClient));
    }
    newInstrumentService() {
      return new InstrumentService(__privateGet(this, _websocketClient));
    }
    newProductService() {
      return new ProductService(__privateGet(this, _websocketClient));
    }
    newReportService() {
      return new ReportService(__privateGet(this, _websocketClient));
    }
    newSystemService() {
      return new SystemService(__privateGet(this, _websocketClient));
    }
    newSubscriptionService() {
      return new SubscriptionService(__privateGet(this, _websocketClient));
    }
    newTradingService() {
      return new TradingService(__privateGet(this, _websocketClient));
    }
    newUserService() {
      return new UserService(__privateGet(this, _websocketClient));
    }
  };
  _websocketClient = new WeakMap();

  // lib/index.ts
  var HttpClient2 = HttpServiceFactory;
  var WebsocketClient2 = WebsocketServiceFactory;
  var index_default = {
    HttpClient: HttpServiceFactory,
    WebsocketClient: WebsocketServiceFactory,
    models: models_exports
  };
  return __toCommonJS(index_exports);
})();
