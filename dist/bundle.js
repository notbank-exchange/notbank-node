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

  // node_modules/node-fetch/browser.js
  var require_browser = __commonJS({
    "node_modules/node-fetch/browser.js"(exports, module) {
      "use strict";
      var getGlobal = function() {
        if (typeof self !== "undefined") {
          return self;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global !== "undefined") {
          return global;
        }
        throw new Error("unable to locate global object");
      };
      var globalObject = getGlobal();
      module.exports = exports = globalObject.fetch;
      if (globalObject.fetch) {
        exports.default = globalObject.fetch.bind(globalObject);
      }
      exports.Headers = globalObject.Headers;
      exports.Request = globalObject.Request;
      exports.Response = globalObject.Response;
    }
  });

  // node_modules/universal-websocket-client/browser.js
  var require_browser2 = __commonJS({
    "node_modules/universal-websocket-client/browser.js"(exports, module) {
      "use strict";
      module.exports = WebSocket;
    }
  });

  // lib/index.ts
  var index_exports = {};
  __export(index_exports, {
    NotbankClient: () => NotbankClient,
    models: () => models_exports
  });

  // lib/models/index.ts
  var models_exports = {};
  __export(models_exports, {
    AccountType: () => AccountType,
    ActionType: () => ActionType,
    ArgentinaBankAccountKind: () => ArgentinaBankAccountKind,
    BrazilBankAccountKind: () => BrazilBankAccountKind,
    ChangeReason: () => ChangeReason,
    ChileBankAccountKind: () => ChileBankAccountKind,
    ColombiaBankAccountKind: () => ColombiaBankAccountKind,
    DepositFeeMessages: () => DepositFeeMessages,
    DepositStatus: () => DepositStatus,
    Direction: () => Direction,
    FeeCalcType: () => FeeCalcType,
    FeeProductType: () => FeeProductType,
    FeeType: () => FeeType,
    InstrumentStateArgument: () => InstrumentStateArgument,
    InstrumentType: () => InstrumentType,
    MakerTaker: () => MakerTaker,
    NotbankError: () => NotbankError,
    OrderFlag: () => OrderFlag,
    OrderSide: () => OrderSide,
    OrderState: () => OrderState,
    OrderTypeInt: () => OrderTypeInt,
    OrderTypeStr: () => OrderTypeStr,
    PegPriceType: () => PegPriceType,
    PeruBankAccountKind: () => PeruBankAccountKind,
    PixType: () => PixType,
    ProductType: () => ProductType,
    ReferenceType: () => ReferenceType,
    ReportFlavor: () => ReportFlavor,
    ReportFrequency: () => ReportFrequency,
    ReportRequestStatus: () => ReportRequestStatus,
    ReportWriterResultStatus: () => ReportWriterResultStatus,
    RiskType: () => RiskType,
    SessionStatus: () => SessionStatus,
    SideType: () => SideType,
    SubscriptionResponse: () => SubscriptionResponse,
    SupportedCountry: () => SupportedCountry,
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
    WithdrawTemplateType: () => WithdrawTemplateType,
    orderbookFromRaw: () => orderbookFromRaw
  });

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

  // lib/models/enums/bankAccounts.ts
  var ArgentinaBankAccountKind = /* @__PURE__ */ ((ArgentinaBankAccountKind2) => {
    ArgentinaBankAccountKind2["CORRIENTE"] = "corriente";
    ArgentinaBankAccountKind2["VISTA"] = "vista";
    ArgentinaBankAccountKind2["AHORRO"] = "ahorro";
    ArgentinaBankAccountKind2["ELECTRONIC_CHECKBOOK"] = "electronic_checkbook";
    ArgentinaBankAccountKind2["AR_CBU"] = "ar_cbu";
    ArgentinaBankAccountKind2["AR_CVU"] = "ar_cvu";
    ArgentinaBankAccountKind2["AR_ALIAS"] = "ar_alias";
    return ArgentinaBankAccountKind2;
  })(ArgentinaBankAccountKind || {});
  var BrazilBankAccountKind = /* @__PURE__ */ ((BrazilBankAccountKind2) => {
    BrazilBankAccountKind2["BR_CORRIENTE_FISICA"] = "br_corriente_fisica";
    BrazilBankAccountKind2["BR_SIMPLE_FISICA"] = "br_simple_fisica";
    BrazilBankAccountKind2["BR_CORRIENTE_JURIDICA"] = "br_corriente_juridica";
    BrazilBankAccountKind2["BR_POUPANCA_FISICA"] = "br_poupanca_fisica";
    BrazilBankAccountKind2["BR_POUPANCA_JURIDICA"] = "br_poupanca_juridica";
    BrazilBankAccountKind2["BR_CAIXA_FACIL"] = "br_caixa_facil";
    BrazilBankAccountKind2["BR_PIX"] = "br_pix";
    return BrazilBankAccountKind2;
  })(BrazilBankAccountKind || {});
  var ChileBankAccountKind = /* @__PURE__ */ ((ChileBankAccountKind2) => {
    ChileBankAccountKind2["CORRIENTE"] = "corriente";
    ChileBankAccountKind2["VISTA"] = "vista";
    ChileBankAccountKind2["AHORRO"] = "ahorro";
    ChileBankAccountKind2["ELECTRONIC_CHECKBOOK"] = "electronic_checkbook";
    return ChileBankAccountKind2;
  })(ChileBankAccountKind || {});
  var PeruBankAccountKind = /* @__PURE__ */ ((PeruBankAccountKind2) => {
    PeruBankAccountKind2["CORRIENTE"] = "corriente";
    PeruBankAccountKind2["AHORRO"] = "ahorro";
    return PeruBankAccountKind2;
  })(PeruBankAccountKind || {});
  var ColombiaBankAccountKind = /* @__PURE__ */ ((ColombiaBankAccountKind2) => {
    ColombiaBankAccountKind2["CORRIENTE"] = "corriente";
    ColombiaBankAccountKind2["AHORRO"] = "ahorro";
    return ColombiaBankAccountKind2;
  })(ColombiaBankAccountKind || {});

  // lib/models/enums/changeReason.ts
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

  // lib/models/enums/countries.ts
  var SupportedCountry = /* @__PURE__ */ ((SupportedCountry2) => {
    SupportedCountry2["AR"] = "AR";
    SupportedCountry2["BR"] = "BR";
    SupportedCountry2["CL"] = "CL";
    SupportedCountry2["PE"] = "PE";
    SupportedCountry2["CO"] = "CO";
    return SupportedCountry2;
  })(SupportedCountry || {});

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

  // lib/models/enums/instrumentStateArgument.ts
  var InstrumentStateArgument = /* @__PURE__ */ ((InstrumentStateArgument2) => {
    InstrumentStateArgument2["BOTH"] = "BOTH";
    InstrumentStateArgument2["INACTIVE"] = "INACTIVE";
    return InstrumentStateArgument2;
  })(InstrumentStateArgument || {});

  // lib/models/enums/instrumentType.ts
  var InstrumentType = /* @__PURE__ */ ((InstrumentType2) => {
    InstrumentType2["UNKNOWN"] = "Unknown";
    InstrumentType2["STANDARD"] = "Standard";
    return InstrumentType2;
  })(InstrumentType || {});

  // lib/models/enums/makerTaker.ts
  var MakerTaker = /* @__PURE__ */ ((MakerTaker2) => {
    MakerTaker2[MakerTaker2["Unknown"] = 0] = "Unknown";
    MakerTaker2[MakerTaker2["Maker"] = 1] = "Maker";
    MakerTaker2[MakerTaker2["Taker"] = 2] = "Taker";
    return MakerTaker2;
  })(MakerTaker || {});

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

  // lib/models/enums/orderSide.ts
  var OrderSide = /* @__PURE__ */ ((OrderSide2) => {
    OrderSide2[OrderSide2["Buy"] = 0] = "Buy";
    OrderSide2[OrderSide2["Sell"] = 1] = "Sell";
    return OrderSide2;
  })(OrderSide || {});

  // lib/models/enums/orderState.ts
  var OrderState = /* @__PURE__ */ ((OrderState2) => {
    OrderState2["Unknown"] = "Unknown";
    OrderState2["Working"] = "Working";
    OrderState2["Rejected"] = "Rejected";
    OrderState2["Canceled"] = "Canceled";
    OrderState2["Expired"] = "Expired";
    OrderState2["FullyExecuted"] = "Fully Executed";
    return OrderState2;
  })(OrderState || {});

  // lib/models/enums/orderType.ts
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

  // lib/models/enums/pegPriceType.ts
  var PegPriceType = /* @__PURE__ */ ((PegPriceType2) => {
    PegPriceType2[PegPriceType2["Last"] = 1] = "Last";
    PegPriceType2[PegPriceType2["Bid"] = 2] = "Bid";
    PegPriceType2[PegPriceType2["Ask"] = 3] = "Ask";
    PegPriceType2[PegPriceType2["Midpoint"] = 4] = "Midpoint";
    return PegPriceType2;
  })(PegPriceType || {});

  // lib/models/enums/pixType.ts
  var PixType = /* @__PURE__ */ ((PixType2) => {
    PixType2["CPF"] = "CPF";
    PixType2["CNPJ"] = "CNPJ";
    PixType2["EMAIL"] = "Email";
    PixType2["PHONE"] = "Phone";
    PixType2["OTRO"] = "Otro";
    return PixType2;
  })(PixType || {});

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

  // lib/models/enums/reportFlavor.ts
  var ReportFlavor = /* @__PURE__ */ ((ReportFlavor2) => {
    ReportFlavor2["TradeActivity"] = "TradeActivity";
    ReportFlavor2["TransactionActivity"] = "TransactionActivity";
    ReportFlavor2["ProductDelta"] = "ProductDelta";
    ReportFlavor2["ProfitAndLoss"] = "ProfitAndLoss";
    ReportFlavor2["Transaction"] = "Transaction";
    ReportFlavor2["Treasury"] = "Treasury";
    return ReportFlavor2;
  })(ReportFlavor || {});

  // lib/models/enums/reportFrequency.ts
  var ReportFrequency = /* @__PURE__ */ ((ReportFrequency2) => {
    ReportFrequency2["OnDemand"] = "OnDemand";
    ReportFrequency2["Hourly"] = "Hourly";
    ReportFrequency2["Daily"] = "Daily";
    ReportFrequency2["Weekly"] = "Weekly";
    ReportFrequency2["Monthly"] = "Monthly";
    ReportFrequency2["Annually"] = "Annually";
    return ReportFrequency2;
  })(ReportFrequency || {});

  // lib/models/enums/reportRequestStatus.ts
  var ReportRequestStatus = /* @__PURE__ */ ((ReportRequestStatus2) => {
    ReportRequestStatus2["Submitted"] = "Submitted";
    ReportRequestStatus2["Validating"] = "Validating";
    ReportRequestStatus2["Scheduled"] = "Scheduled";
    ReportRequestStatus2["InProgress"] = "InProgress";
    ReportRequestStatus2["Completed"] = "Completed";
    ReportRequestStatus2["Aborting"] = "Aborting";
    ReportRequestStatus2["Aborted"] = "Aborted";
    ReportRequestStatus2["UserCancelled"] = "UserCancelled";
    ReportRequestStatus2["SysRetired"] = "SysRetired";
    ReportRequestStatus2["Pending"] = "Pending";
    ReportRequestStatus2["UserCancelPending"] = "UserCancelPending";
    return ReportRequestStatus2;
  })(ReportRequestStatus || {});

  // lib/models/enums/reportWriterResultStatus.ts
  var ReportWriterResultStatus = /* @__PURE__ */ ((ReportWriterResultStatus2) => {
    ReportWriterResultStatus2["NotStarted"] = "NotStarted";
    ReportWriterResultStatus2["NotComplete"] = "NotComplete";
    ReportWriterResultStatus2["ErrorComplete"] = "ErrorComplete";
    ReportWriterResultStatus2["SuccessComplete"] = "SuccessComplete";
    ReportWriterResultStatus2["Cancelled"] = "Cancelled";
    return ReportWriterResultStatus2;
  })(ReportWriterResultStatus || {});

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

  // lib/models/response/orderBook.ts
  function orderbookFromRaw(raw) {
    return {
      timestamp: raw.timestamp,
      bids: raw.bids.map((level) => {
        return { quantity: level[0], price: level[1] };
      }),
      asks: raw.asks.map((level) => {
        return { quantity: level[0], price: level[1] };
      })
    };
  }

  // lib/models/notbankError.ts
  var _NotbankError = class _NotbankError extends Error {
    constructor(message, code) {
      super("Notbank Error. " + message);
      this.code = code;
    }
  };
  _NotbankError.Factory = class Factory {
    static createFromApResponse(standardResponse) {
      var errMsg = "";
      if (standardResponse.errorcode) {
        errMsg += `(code=${standardResponse.errorcode})`;
      }
      if (standardResponse.errormsg) {
        errMsg += " " + standardResponse.errormsg + ".";
      }
      if (standardResponse.detail) {
        errMsg += " " + standardResponse.detail + ".";
      }
      return new _NotbankError(
        errMsg,
        standardResponse.errorcode || standardResponse.statusCode
      );
    }
    static createFromNbResponse(standardResponse) {
      var errMsg = "";
      if (standardResponse.message) {
        errMsg += standardResponse.message;
        if (!standardResponse.message.endsWith(".")) {
          errMsg += ".";
        }
      }
      if (standardResponse.detail) {
        errMsg += " " + standardResponse.detail;
        if (!standardResponse.detail.endsWith(".")) {
          errMsg += ".";
        }
      }
      return new _NotbankError(
        errMsg,
        -1
      );
    }
  };
  var NotbankError = _NotbankError;

  // lib/models/subscriptionResponse.ts
  var UnsubscriptionResponse = class {
  };

  // lib/models/unsubscriptionResponse.ts
  var SubscriptionResponse = class {
  };

  // lib/core/hmac.ts
  var import_crypto = __toESM(__require("crypto"), 1);
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

  // lib/core/http/apResponseHandler.ts
  var _ApResponseHandler_static, getJsonData_fn, getTextData_fn;
  var _ApResponseHandler = class _ApResponseHandler {
    static handle(response) {
      return __async(this, null, function* () {
        var _a, _b;
        if (response.status >= 400 || response.status < 200) {
          throw new Error(
            `http error (${response.status}) not a successfull response. ${yield __privateMethod(_a = _ApResponseHandler, _ApResponseHandler_static, getTextData_fn).call(_a, response)}`
          );
        }
        var jsonResponse = yield __privateMethod(_b = _ApResponseHandler, _ApResponseHandler_static, getJsonData_fn).call(_b, response);
        if (!jsonResponse) {
          throw new NotbankError("http error. (status=" + response.status + ")", -1);
        }
        var standardResponse = jsonResponse;
        if ((standardResponse == null ? void 0 : standardResponse.result) === false && (standardResponse == null ? void 0 : standardResponse.errorcode) != null) {
          throw NotbankError.Factory.createFromApResponse(standardResponse);
        }
        return jsonResponse;
      });
    }
  };
  _ApResponseHandler_static = new WeakSet();
  getJsonData_fn = function(response) {
    return __async(this, null, function* () {
      try {
        return yield response.json();
      } catch (err) {
        return null;
      }
    });
  };
  getTextData_fn = function(response) {
    return __async(this, null, function* () {
      try {
        return yield response.text();
      } catch (err) {
        return null;
      }
    });
  };
  __privateAdd(_ApResponseHandler, _ApResponseHandler_static);
  var ApResponseHandler = _ApResponseHandler;

  // lib/core/http/nbResponseHandler.ts
  var _NbResponseHandler_static, getData_fn;
  var _NbResponseHandler = class _NbResponseHandler {
    static handle(response, paged) {
      return __async(this, null, function* () {
        var _a;
        try {
          var jsonResponse = yield __privateMethod(_a = _NbResponseHandler, _NbResponseHandler_static, getData_fn).call(_a, response);
          if (!jsonResponse) {
            throw new NotbankError("http error. (status=" + response.status + ")", -1);
          }
          var nbResponse = jsonResponse;
          if ((nbResponse == null ? void 0 : nbResponse.status) === "success") {
            return paged ? jsonResponse : nbResponse.data;
          }
          const error = NotbankError.Factory.createFromNbResponse(nbResponse);
          throw error;
        } catch (error) {
          throw error;
        }
      });
    }
  };
  _NbResponseHandler_static = new WeakSet();
  getData_fn = function(response) {
    return __async(this, null, function* () {
      try {
        const data = yield response.json();
        return data;
      } catch (err) {
        return null;
      }
    });
  };
  __privateAdd(_NbResponseHandler, _NbResponseHandler_static);
  var NbResponseHandler = _NbResponseHandler;

  // lib/core/http/requester.ts
  var import_node_fetch = __toESM(require_browser(), 1);
  var _aptoken;
  var Requester = class {
    constructor() {
      __privateAdd(this, _aptoken);
      __privateSet(this, _aptoken, null);
    }
    updateSessionToken(aptoken) {
      __privateSet(this, _aptoken, aptoken);
    }
    request(config) {
      const isPostOrDeleteRequest = [
        "POST" /* POST */,
        "DELETE" /* DELETE */
      ].includes(config.requestType);
      var url = isPostOrDeleteRequest ? config.url : this.getUrlWithSearchParams(config.url, config.params);
      var body = isPostOrDeleteRequest ? config.params : null;
      var requestData = {
        method: config.requestType,
        headers: this.getHeaders(config.extraHeaders)
      };
      if (body) {
        requestData.body = JSON.stringify(body);
      }
      return (0, import_node_fetch.default)(url, requestData);
    }
    getHeaders(extraHeaders) {
      var headers = {
        "Content-type": "application/json",
        charset: "UTF-8"
      };
      if (__privateGet(this, _aptoken)) {
        headers["aptoken"] = __privateGet(this, _aptoken);
      }
      if (extraHeaders) {
        return __spreadValues(__spreadValues({}, headers), extraHeaders);
      }
      return headers;
    }
    getUrlWithSearchParams(endpoint, params) {
      return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
    }
  };
  _aptoken = new WeakMap();

  // lib/core/http/httpClient.ts
  var _requester, _host;
  var HttpConnection = class {
    constructor(domain) {
      __privateAdd(this, _requester);
      __privateAdd(this, _host);
      __privateSet(this, _requester, new Requester());
      __privateSet(this, _host, "https://" + domain);
    }
    nbRequest(endpoint, requestType, params, paged = false) {
      return __async(this, null, function* () {
        const url = this.getNbUrl(endpoint);
        var response = yield __privateGet(this, _requester).request({ url, requestType, params });
        return yield NbResponseHandler.handle(response, paged);
      });
    }
    apRequest(endpoint, requestType, params, extraHeaders) {
      return __async(this, null, function* () {
        const url = this.getApUrl(endpoint);
        var response = yield __privateGet(this, _requester).request({ url, requestType, params, extraHeaders });
        return yield ApResponseHandler.handle(response);
      });
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        var response = yield this.apRequest(
          "AuthenticateUser" /* AUTHENTICATE_USER */,
          "GET" /* GET */,
          null,
          params
        );
        __privateGet(this, _requester).updateSessionToken(response.SessionToken);
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
    getApUrl(endpoint) {
      return __privateGet(this, _host) + "/ap/" + endpoint;
    }
    getNbUrl(endpoint) {
      return __privateGet(this, _host) + "/api/nb/" + endpoint;
    }
    connect() {
      return Promise.resolve();
    }
    close() {
      return Promise.resolve();
    }
  };
  _requester = new WeakMap();
  _host = new WeakMap();

  // lib/utils/completeParams.ts
  function completeParams(params, omsId) {
    return __spreadProps(__spreadValues({}, params), {
      OMSId: omsId
    });
  }

  // lib/services/accountService.ts
  var AccountService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getaccounttransactions
     */
    getAccountTransactions(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountTransactions" /* GET_ACCOUNT_TRANSACTIONS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountpositions
     */
    getAccountPositions(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountPositions" /* GET_ACCOUNT_POSITIONS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountinstrumentstatistics
     */
    getAccountInstrumentStatistics(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountInstrumentStatistics" /* GET_ACCOUNT_INSTRUMENT_STATISTICS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountinfo
     */
    getAccountInfo(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetAccountInfo" /* GET_ACCOUNT_INFO */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/authService.ts
  var AuthService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/?http#webauthenticateuser
     */
    webAuthenticateUser(params) {
      return __async(this, null, function* () {
        return yield this.connection.apRequest(
          "WebAuthenticateUser" /* WEB_AUTHENTICATE_USER */,
          "NONE" /* NONE */,
          params
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/?http#logout
     */
    logOut() {
      return __async(this, null, function* () {
        return yield this.connection.apRequest("LogOut" /* LOGOUT */, "POST" /* POST */);
      });
    }
  };

  // lib/services/feeService.ts
  var FeeService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositfee
     */
    getDepositFee(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetDepositFee" /* GET_DEPOSIT_FEE */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getwithdrawfee
     */
    getWithdrawFee(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetWithdrawFee" /* GET_WITHDRAW_FEE */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getomswithdrawfees
     */
    getOMSWithdrawFees(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOMSWithdrawFees" /* GET_OMS_WITHDRAW_FEES */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getomsdepositfees
     */
    getOMSDepositFees(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetOMSDepositFees" /* GET_OMS_DEPOSIT_FEES */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getaccountfees
     */
    getAccountFees(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetAccountFees" /* GET_ACCOUNT_FEES */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getorderfee
     */
    getOrderFee(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetOrderFee" /* GET_ORDER_FEE */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/instrumentService.ts
  var InstrumentService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
      this.instrumentCache = {};
    }
    /**
     * https://apidoc.notbank.exchange/#getinstruments
     */
    getInstruments(params = {}) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetInstruments" /* GET_INSTRUMENTS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getinstrument
     */
    getInstrument(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetInstrument" /* GET_INSTRUMENT */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    getInstrumentBySymbol(params) {
      return __async(this, null, function* () {
        if (!(params.symbol in this.instrumentCache)) {
          var instruments = yield this.getInstruments();
          instruments.map((instrument) => this.instrumentCache[instrument.Symbol] = instrument);
        }
        if (params.symbol in this.instrumentCache) {
          return Promise.resolve(this.instrumentCache[params.symbol]);
        } else {
          throw new NotbankError("no instrument found for symbol " + params.symbol, -1);
        }
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getinstrumentverificationlevelconfig
     */
    getInstrumentVerificationLevelConfigs(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetInstrumentVerificationLevelConfig" /* GET_INSTRUMENT_VERIFICATION_LEVEL_CONFIG */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/productService.ts
  var ProductService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
      this.productCache = {};
    }
    /**
     * https://apidoc.notbank.exchange/#getproduct
     */
    getProduct(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetProduct" /* GET_PRODUCT */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getproducts
     */
    getProducts() {
      return __async(this, arguments, function* (params = {}) {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetProducts" /* GET_PRODUCTS */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    getProductBySymbol(params) {
      return __async(this, null, function* () {
        if (!(params.symbol in this.productCache)) {
          var products = yield this.getProducts();
          products.map((product) => this.productCache[product.Product] = product);
        }
        if (params.symbol in this.productCache) {
          return Promise.resolve(this.productCache[params.symbol]);
        } else {
          throw new NotbankError("no product found for symbol " + params.symbol, -1);
        }
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getverificationlevelconfig
     */
    getVerificationLevelConfig(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return yield this.connection.apRequest(
          "GetVerificationLevelConfig" /* GET_VERIFICATION_LEVEL_CONFIG */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
  };

  // lib/services/reportService.ts
  var ReportService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#generatetradeactivityreport
     */
    generateTradeActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GenerateTradeActivityReport" /* GENERATE_TRADE_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#generatetransactionactivityreport
     */
    generateTransactionActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GenerateTransactionActivityReport" /* GENERATE_TRANSACTION_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#generateproductdeltaactivityreport
     */
    generateProductDeltaActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GenerateProductDeltaActivityReport" /* GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#generatepnlactivityreport
     */
    generatePnLActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GeneratePnLActivityReport" /* GENERATE_PNL_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduletradeactivityreport
     */
    scheduleTradeActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleTradeActivityReport" /* SCHEDULE_TRADE_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduletransactionactivityreport
     */
    scheduleTransactionActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleTransactionActivityReport" /* SCHEDULE_TRANSACTION_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduleproductdeltaactivityreport
     */
    scheduleProductDeltaActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleProductDeltaActivityReport" /* SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#scheduleprofitandlossactivityreport
     */
    scheduleProfitAndLossActivityReport(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ScheduleProfitAndLossActivityReport" /* SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#canceluserreport
     */
    cancelUserReport(request) {
      return this.connection.apRequest(
        "CancelUserReport" /* CANCEL_USER_REPORT */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreportwriterresultrecords
     */
    getUserReportWriterResultRecords(request) {
      return this.connection.apRequest(
        "GetUserReportWriterResultRecords" /* GET_USER_REPORT_WRITER_RESULT_RECORDS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreporttickets
     */
    getUserReportTickets(request) {
      return this.connection.apRequest(
        "GetUserReportTickets" /* GET_USER_REPORT_TICKETS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#removeuserreportticket
     */
    removeUserReportTicket(request) {
      return this.connection.apRequest(
        "RemoveUserReportTicket" /* REMOVE_USER_REPORT_TICKET */,
        "POST" /* POST */,
        request.UserReportTicketId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserreportticketsbystatus
     */
    getUserReportTicketsByStatus(request) {
      return this.connection.apRequest(
        "GetUserReportTicketsByStatus" /* GET_USER_REPORT_TICKETS_BY_STATUS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#downloaddocument
     */
    downloadDocument(request) {
      return this.connection.apRequest(
        "DownloadDocument" /* DOWNLOAD_DOCUMENT */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#downloaddocumentslice
     */
    downloadDocumentSlice(request) {
      return this.connection.apRequest(
        "DownloadDocumentSlice" /* DOWNLOAD_DOCUMENT_SLICE */,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/systemService.ts
  var SystemService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#ping
     */
    ping() {
      return this.connection.apRequest(
        "Ping" /* PING */,
        "POST" /* POST */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#healthcheck
     */
    healthCheck() {
      return this.connection.apRequest(
        "HealthCheck" /* HEALTH_CHECK */,
        "POST" /* POST */
      );
    }
  };

  // lib/utils/completeParamsArray.ts
  function completeParamsArray(paramsArray, omsId) {
    return paramsArray.map((params) => __spreadProps(__spreadValues({}, params), {
      OMSId: omsId
    }));
  }

  // lib/utils/parseIndexTrade.ts
  function parseTradeSummary(jsonTrade) {
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
  var TradingService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#sendorderlist
     */
    sendOrderList(params) {
      const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
      return this.connection.apRequest(
        "SendOrderList" /* SEND_ORDER_LIST */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#sendcancellist
     */
    sendCancelList(params) {
      const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
      return this.connection.apRequest(
        "SendCancelList" /* SEND_CANCEL_LIST */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#sendcancelreplacelist
     */
    sendCancelReplaceList(params) {
      const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
      return this.connection.apRequest(
        "SendCancelReplaceList" /* SEND_CANCEL_REPLACE_LIST */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#modifyorder
     */
    modifyOrder(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "ModifyOrder" /* MODIFY_ORDER */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#cancelallorders
     */
    cancelAllOrders(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "CancelAllOrders" /* CANCEL_ALL_ORDERS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorderstatus
     */
    getOrderStatus(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetOrderStatus" /* GET_ORDER_STATUS */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getordershistory
     */
    getOrdersHistory(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrdersHistory" /* GET_ORDERS_HISTORY */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#gettradeshistory
     */
    getTradesHistory(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetTradesHistory" /* GET_TRADES_HISTORY */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorderhistorybyorderid
     */
    getOrderHistoryByOrderId(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrderHistoryByOrderId" /* GET_ORDER_HISTORY_BY_ORDER_ID */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#gettickerhistory
     */
    getTickerHistory(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetTickerHistory" /* GET_TICKER_HISTORY */,
          "POST" /* POST */,
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
    /**
     * https://apidoc.notbank.exchange/#getlasttrades
     */
    getLastTrades(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetLastTrades" /* GET_LAST_TRADES */,
          "POST" /* POST */,
          paramsWithOMSId
        );
        return response.map((item) => parseTradeSummary(item));
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1summary
     */
    getLevel1Summary(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(
          "GetLevel1Summary" /* GET_LEVEL1_SUMMARY */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getlevel1summarymin
     */
    getLevel1SummaryMin(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetLevel1SummaryMin" /* GET_LEVEL1_SUMMARY_MIN */,
          "POST" /* POST */,
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
    /**
     * https://apidoc.notbank.exchange/#getopentradereports
     */
    getOpenTradeReports(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetOpenTradeReports" /* GET_OPEN_TRADE_REPORTS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorders
     */
    getOrders(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrders" /* GET_ORDERS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getorderhistory
     */
    getOrderHistory(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetOrderHistory" /* GET_ORDER_HISTORY */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#sendorder
     */
    sendOrder(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.apRequest(
          "SendOrder" /* SEND_ORDER */,
          "POST" /* POST */,
          paramsWithOMSId
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#cancelreplaceorder
     */
    cancelReplaceOrder(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "CancelReplaceOrder" /* CANCEL_REPLACE_ORDER */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#cancelorder
     */
    cancelOrder(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "CancelOrder" /* CANCEL_ORDER */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getopenorders
     */
    getOpenOrders(params) {
      const paramsWithOMSId = completeParams(params, this.OMS_ID);
      return this.connection.apRequest(
        "GetOpenOrders" /* GET_OPEN_ORDERS */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getaccounttrades
     */
    getAccountTrades(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetAccountTrades" /* GET_ACCOUNT_TRADES */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#summary
     */
    getSummary() {
      return this.connection.apRequest(
        "Summary" /* SUMMARY */,
        "POST" /* POST */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#ticker
     */
    getTicker() {
      return this.connection.apRequest(
        "Ticker" /* TICKER */,
        "POST" /* POST */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#orderbook
     */
    getOrderBook(request) {
      return __async(this, null, function* () {
        const orderbookRaw = yield this.connection.apRequest(
          "OrderBook" /* ORDER_BOOK */,
          "POST" /* POST */,
          request
        );
        return orderbookFromRaw(orderbookRaw);
      });
    }
    getOrderBookRaw(request) {
      return this.connection.apRequest(
        "OrderBook" /* ORDER_BOOK */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#trades
     */
    getTrades(params) {
      return this.connection.apRequest(
        "Trades" /* TRADES */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getl2snapshot
     */
    getL2Snapshot(request) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(request, this.OMS_ID);
        const response = yield this.connection.apRequest(
          "GetL2Snapshot" /* GET_L2_SNAPSHOT */,
          "POST" /* POST */,
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
    /**
     * https://apidoc.notbank.exchange/#getlevel1
     */
    getLevel1(request) {
      const paramsWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetLevel1" /* GET_LEVEL1 */,
        "POST" /* POST */,
        paramsWithOMSId
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getenums
     */
    getEnums() {
      return this.connection.apRequest(
        "GetEnums" /* GET_ENUMS */,
        "POST" /* POST */
      );
    }
  };

  // lib/services/userService.ts
  var UserService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getuseraccounts
     */
    getUserAccounts(request) {
      const params = completeParams(request, this.OMS_ID);
      return this.connection.apRequest(
        "GetUserAccounts" /* GET_USER_ACCOUNTS */,
        "POST" /* POST */,
        params
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserdevices
     */
    getUserDevices(request) {
      return this.connection.apRequest(
        "GetUserDevices" /* GET_USER_DEVICES */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserinfo
     */
    getUserInfo(request) {
      return this.connection.apRequest(
        "GetUserInfo" /* GET_USER_INFO */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getuserpermissions
     */
    getUserPermissions(request) {
      return this.connection.apRequest(
        "GetUserPermissions" /* GET_USER_PERMISSIONS */,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/walletService.ts
  var _WalletService_instances, nbPagedRequest_fn;
  var WalletService = class {
    constructor(connection) {
      __privateAdd(this, _WalletService_instances);
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "banks" /* BANKS */, "GET" /* GET */, request);
    }
    /**
     * https://apidoc.notbank.exchange/#addclientbankaccount
     */
    AddClientBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccount
     */
    getClientBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */ + "/" + request.bankAccountId,
        "GET" /* GET */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getclientbankaccounts
     */
    getClientBankAccounts(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "bank-accounts" /* BANK_ACCOUNTS */, "GET" /* GET */, request);
    }
    /**
     * https://apidoc.notbank.exchange/#deleteclientbankaccount
     */
    deleteClientBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */ + "/" + request.bankAccountId,
        "DELETE" /* DELETE */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getnetworkstemplates
     */
    getNetworksTemplates(request) {
      return this.connection.nbRequest(
        "wallet/crypto/withdrawal/templates" /* GET_NETWORKS_TEMPLATES */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositaddresses
     */
    getDepositAddresses(request) {
      return this.connection.nbRequest(
        "wallet/crypto" /* DEPOSIT_ADDRESS */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createdepositaddress
     */
    createDepositAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto" /* DEPOSIT_ADDRESS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getwhitelistedaddresses
     */
    getWhitelistedAddresses(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#addwhitelistedaddress
     */
    addWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
     */
    confirmWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId + "/verification",
        "POST" /* POST */,
        { sms_code: request.sms_code, account_id: request.account_id }
      );
    }
    resendVerificationCodeWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId + "/verification",
        "GET" /* GET */,
        { account_id: request.account_id }
      );
    }
    /**
     * https://apidoc.notbank.exchange/#deletewhitelistedaddress
     */
    deleteWhitelistedAddress(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId,
        "DELETE" /* DELETE */,
        {
          account_id: request.account_id,
          otp: request.otp
        }
      );
    }
    /**
     * https://apidoc.notbank.exchange/#updateonestepwithdraw
     */
    updateOneStepWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/crypto/whitelist-addresses/one-step/status" /* UPDATE_ONE_STEP_WITHDRAW */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createcryptowithdraw
     */
    createCryptoWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/crypto/withdrawal" /* CREATE_CRYPTO_WITHDRAW */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createfiatdeposit
     */
    createFiatDeposit(request) {
      return __async(this, null, function* () {
        const result = yield this.connection.nbRequest(
          "wallet/fiat/deposit" /* FIAT_DEPOSIT */,
          "POST" /* POST */,
          request
        );
        return result == null ? void 0 : result.url;
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    getOwnersFiatWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/fiat/withdrawal/owners" /* GET_OWNERS_FIAT_WITHDRAW */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getownersfiatwithdraw
     */
    createFiatWithdraw(request) {
      return __async(this, null, function* () {
        const result = yield this.connection.nbRequest(
          "wallet/fiat/withdrawal" /* FIAT_WITHDRAW */,
          "POST" /* POST */,
          request
        );
        return result == null ? void 0 : result.withdrawal_id;
      });
    }
    /**
    * https://apidoc.notbank.exchange/#confirmfiatwithdraw
    */
    confirmFiatWithdraw(request) {
      return this.connection.nbRequest(
        "wallet/fiat/withdrawal" /* FIAT_WITHDRAW */ + "/" + request.withdrawal_id,
        "POST" /* POST */,
        { attempt_code: request.attempt_code }
      );
    }
    /**
     * https://apidoc.notbank.exchange/#transferfunds
     */
    transferFunds(request) {
      return this.connection.nbRequest(
        "wallet/transfer-funds" /* TRANSFER_FUNDS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#gettransactions
     */
    getTransactions(request) {
      return __privateMethod(this, _WalletService_instances, nbPagedRequest_fn).call(this, "wallet/transactions" /* GET_TRANSACTIONS */, "GET" /* GET */, request);
    }
  };
  _WalletService_instances = new WeakSet();
  nbPagedRequest_fn = function(endpoint, requestType, message) {
    return this.connection.nbRequest(
      endpoint,
      requestType,
      message,
      true
    );
  };

  // lib/services/quoteService.ts
  var QuoteService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getquotes
     */
    getQuotes(request) {
      return this.connection.nbRequest(
        "quotes" /* QUOTES */,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createdirectquote
     */
    createDirectQuote(request) {
      return __async(this, null, function* () {
        return (yield this.connection.nbRequest(
          "quotes/direct" /* QUOTES_DIRECT */,
          "POST" /* POST */,
          request
        )).id;
      });
    }
    /**
     * https://apidoc.notbank.exchange/#createinversequote
     */
    createInverseQuote(request) {
      return __async(this, null, function* () {
        return (yield this.connection.nbRequest(
          "quotes/inverse" /* QUOTES_INVERSE */,
          "POST" /* POST */,
          request
        )).id;
      });
    }
    /**
     * https://apidoc.notbank.exchange/#getquote
     */
    getQuote(request) {
      return this.connection.nbRequest(
        "quotes" /* QUOTES */ + "/" + request.quote_id,
        "GET" /* GET */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#executequote
     */
    executeQuote(request) {
      return this.connection.nbRequest(
        "quotes" /* QUOTES */ + "/" + request.quote_id,
        "POST" /* POST */,
        request
      );
    }
  };

  // lib/services/httpServiceFactory.ts
  var DEFAULT_DOMAIN = "api.notbank.exchange";
  var _httpConnection;
  var HttpServiceFactory = class {
    constructor(domain) {
      __privateAdd(this, _httpConnection);
      const finalDomain = domain || DEFAULT_DOMAIN;
      __privateSet(this, _httpConnection, new HttpConnection(finalDomain));
    }
    authenticateUser(params) {
      var nonce = getNonce();
      var signature = sign(
        params.ApiPublicKey,
        params.ApiSecretKey,
        params.UserId,
        nonce
      );
      return __privateGet(this, _httpConnection).authenticateUser({
        APIKey: params.ApiPublicKey,
        Signature: signature,
        UserId: params.UserId,
        Nonce: nonce
      });
    }
    getConnection() {
      return __privateGet(this, _httpConnection);
    }
    newAccountService() {
      return new AccountService(__privateGet(this, _httpConnection));
    }
    newAuthService() {
      return new AuthService(__privateGet(this, _httpConnection));
    }
    newFeeService() {
      return new FeeService(__privateGet(this, _httpConnection));
    }
    newInstrumentService() {
      return new InstrumentService(__privateGet(this, _httpConnection));
    }
    newProductService() {
      return new ProductService(__privateGet(this, _httpConnection));
    }
    newReportService() {
      return new ReportService(__privateGet(this, _httpConnection));
    }
    newSystemService() {
      return new SystemService(__privateGet(this, _httpConnection));
    }
    newTradingService() {
      return new TradingService(__privateGet(this, _httpConnection));
    }
    newUserService() {
      return new UserService(__privateGet(this, _httpConnection));
    }
    newWalletService() {
      return new WalletService(__privateGet(this, _httpConnection));
    }
    newQuoteService() {
      return new QuoteService(__privateGet(this, _httpConnection));
    }
  };
  _httpConnection = new WeakMap();

  // lib/core/websocket/pinger.ts
  var Pinger = class {
    constructor(pingIntervalMillis = 1e4, pingTimeoutMillis = 5e3) {
      this.pingIntervalMillis = pingIntervalMillis;
      this.pingTimeoutMillis = pingTimeoutMillis;
    }
    startPing(connection, restarter) {
      this.stop();
      this.interval = setInterval(() => __async(this, null, function* () {
        try {
          yield Promise.race([
            connection.apRequest("Ping" /* PING */, "NONE" /* NONE */),
            new Promise((resolve, reject) => setTimeout(reject, this.pingTimeoutMillis))
          ]);
        } catch (e) {
          yield restarter.reconnect();
          return;
        }
      }), this.pingIntervalMillis);
      if (typeof this.interval.unref === "function") {
        this.interval.unref();
      }
    }
    stop() {
      if (!this.interval) {
        return;
      }
      clearTimeout(this.interval);
    }
  };

  // lib/core/websocket/reauther.ts
  var Reauther = class {
    constructor() {
      this.authenticateFn = null;
    }
    updateAuthentication(authenticateFn) {
      this.authenticateFn = authenticateFn;
    }
    removeAuthentication() {
      this.authenticateFn = null;
    }
    makeAuthentication(connection) {
      if (this.authenticateFn === null) {
        return;
      }
      this.authenticateFn(connection);
    }
  };

  // lib/core/websocket/SubscriptionIdentifier.ts
  var _mapping, _SubscriptionIdentifier_static, getIdPart_fn, getTickerName_fn, getLevel1TickerName_fn, getLevel2TickerName_fn, getSocketTradeName_fn, getAccountEventName_fn, getOrderEventName_fn, getValueFromList_fn, getInstrumentedId_fn, getAccountId_fn, getAccountIdFromAccount_fn;
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
    if (data.Instrument) {
      identifier = identifier + "_" + data.Instrument;
    }
    return identifier;
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

  // lib/core/websocket/resubscriber.ts
  var _Resubscriber_instances, hasCallbackId_fn;
  var Resubscriber = class {
    constructor() {
      __privateAdd(this, _Resubscriber_instances);
      this.currentSubscriptions = [];
    }
    saveSubscription(data) {
      this.currentSubscriptions.push(data);
    }
    removeSubscription(callbackIds) {
      for (let i = 0; i < callbackIds.length; i++) {
        for (let j = 0; j < this.currentSubscriptions.length; j++) {
          var isFromSubscription = __privateMethod(this, _Resubscriber_instances, hasCallbackId_fn).call(this, this.currentSubscriptions[j], callbackIds[i]);
          if (isFromSubscription) {
            this.currentSubscriptions.splice(j, 1);
            return;
          }
        }
      }
    }
    makeSubscriptions(connection) {
      this.currentSubscriptions.forEach((data) => connection.subscribe(
        data.endpoint,
        data.firstIdentifier,
        data.secondIdentifier,
        data.message,
        data.subscriptionHandlers
      ));
    }
  };
  _Resubscriber_instances = new WeakSet();
  hasCallbackId_fn = function(data, callbackId) {
    var subscriptionCallbackId = SubscriptionIdentifier.get(data.endpoint, data.firstIdentifier, data.secondIdentifier);
    return subscriptionCallbackId === callbackId;
  };

  // lib/core/websocket/websocketConnection.ts
  var import_universal_websocket_client = __toESM(require_browser2(), 1);

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

  // lib/core/websocket/websocketConnection.ts
  var emptyFn = (o) => {
  };
  var DEFAULT_DOMAIN2 = "api.notbank.exchange";
  var _WebsocketConnection_instances, getSubscriptionCallbackId_fn, handleMessage_fn, request_fn, handleRequestResponse_fn, requestToCallback_fn;
  var WebsocketConnection = class {
    constructor(configuration) {
      __privateAdd(this, _WebsocketConnection_instances);
      this.domain = (configuration == null ? void 0 : configuration.domain) || DEFAULT_DOMAIN2;
      this.callbackManager = new CallbackManager();
      this.hooks = (configuration == null ? void 0 : configuration.websocketHooks) || {};
      this.peekMessageIn = (configuration == null ? void 0 : configuration.peekMessageIn) || ((_) => {
      });
      this.peekMessageOut = (configuration == null ? void 0 : configuration.peekMessageOut) || ((_) => {
      });
    }
    nbRequest(endpoint, requestType, message) {
      throw new Error("websocket client does not support nb methods.");
    }
    connect() {
      return __async(this, null, function* () {
        this.websocket = new import_universal_websocket_client.default("wss://" + this.domain + "/wsgateway");
        this.websocket.onopen = (event) => {
          var _a, _b;
          return (_b = (_a = this.hooks).onOpen) == null ? void 0 : _b.call(_a, event);
        };
        this.websocket.onclose = (event) => {
          var _a, _b;
          return (_b = (_a = this.hooks).onClose) == null ? void 0 : _b.call(_a, event);
        };
        this.websocket.onerror = (event) => {
          var _a, _b;
          return (_b = (_a = this.hooks).onError) == null ? void 0 : _b.call(_a, event);
        };
        this.websocket.addEventListener("message", (event) => {
          const messageFrame = JSON.parse(event.data);
          __privateMethod(this, _WebsocketConnection_instances, handleMessage_fn).call(this, messageFrame);
        });
        this.websocket.addEventListener(
          "message",
          (event) => {
            var _a, _b;
            return (_b = (_a = this.hooks).onMessage) == null ? void 0 : _b.call(_a, event);
          }
        );
        return new Promise(
          (resolve, _) => this.websocket.addEventListener("open", (_2) => resolve())
        );
      });
    }
    close() {
      return this.websocket.close();
    }
    get readyState() {
      return this.websocket.readyState;
    }
    apRequest(endpoint, requestType, message) {
      return __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
      return __async(this, null, function* () {
        subscriptionCallbacks.map(
          (handler) => this.callbackManager.addSubscriptionCallback(
            SubscriptionIdentifier.get(
              handler.eventName,
              firstIdentifier,
              secondIdentifier
            ),
            handler.eventHandler
          )
        );
        return __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callbackIds) {
      return __async(this, null, function* () {
        this.callbackManager.removeSubscriptionCallback(
          callbackIds.map(
            (callbackId) => SubscriptionIdentifier.get(
              callbackId,
              firstIdentifier,
              secondIdentifier
            )
          )
        );
        return yield __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    closeConnection() {
      this.websocket.socket.close();
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        yield this.apRequest("AuthenticateUser" /* AUTHENTICATE_USER */, "NONE" /* NONE */, params);
      });
    }
  };
  _WebsocketConnection_instances = new WeakSet();
  getSubscriptionCallbackId_fn = function(message) {
    return SubscriptionIdentifier.getFromMessageFrame(message);
  };
  handleMessage_fn = function(message) {
    this.peekMessageIn(message);
    const callback = this.callbackManager.popCallback(message.i);
    if (callback != null) {
      callback(message);
      if (isErrorMessage(message)) {
        return;
      }
    }
    const callbackId = __privateMethod(this, _WebsocketConnection_instances, getSubscriptionCallbackId_fn).call(this, message);
    const subscriptionCallback = this.callbackManager.getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
      subscriptionCallback(message);
      return;
    }
    var lastSuffixStart = callbackId.lastIndexOf("_");
    if (lastSuffixStart == -1) {
      return;
    }
    const broaderCallbackId = callbackId.substring(0, lastSuffixStart);
    const broaderSubscriptionCallback = this.callbackManager.getSubscriptionCallback(callbackId);
    if (broaderSubscriptionCallback != null) {
      broaderSubscriptionCallback(message);
      return;
    }
  };
  request_fn = function(endpoint, message, messageType = 0 /* REQUEST */) {
    return new Promise((resolve, reject) => {
      __privateMethod(this, _WebsocketConnection_instances, requestToCallback_fn).call(this, endpoint, JSON.stringify(message) || "{}", messageType, __privateMethod(this, _WebsocketConnection_instances, handleRequestResponse_fn).call(this, reject, resolve));
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
        reject(NotbankError.Factory.createFromApResponse(payload));
        return;
      }
      var standardResponse = payload;
      if ((standardResponse == null ? void 0 : standardResponse.result) === false && (standardResponse == null ? void 0 : standardResponse.errormsg) != null) {
        reject(NotbankError.Factory.createFromApResponse(payload));
        return;
      }
      resolve(payload);
    };
  };
  requestToCallback_fn = function(endpoint, message, messageType, callback = emptyFn) {
    const sequenceNumber = this.callbackManager.putCallback(callback);
    const frame = {
      m: messageType,
      i: sequenceNumber,
      n: endpoint,
      o: message
    };
    this.peekMessageOut(frame);
    this.websocket.send(JSON.stringify(frame));
  };
  function newStandardErrorFromString(errorStr) {
    return NotbankError.Factory.createFromApResponse({
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

  // lib/core/websocket/restarter.ts
  var _Restarter_instances, connect_fn, newConnection_fn;
  var Restarter = class {
    constructor(params) {
      __privateAdd(this, _Restarter_instances);
      this.closeRequested = false;
      this.reconnecting = false;
      this.connectionConfiguration = params.connectionConfiguration;
      this.pinger = new Pinger();
      this.resubscriber = new Resubscriber();
      this.reauther = new Reauther();
      this.connection = null;
    }
    getResubscriber() {
      return this.resubscriber;
    }
    getReauther() {
      return this.reauther;
    }
    getConnection() {
      if (this.reconnecting) {
        throw new NotbankError("unable to make notbank request. websocket reconnecting", -1);
      }
      return this.connection;
    }
    reconnect() {
      return __async(this, null, function* () {
        if (this.reconnecting || this.closeRequested) {
          return;
        }
        this.reconnecting = true;
        this.closeCurrentConnection();
        this.connection = __privateMethod(this, _Restarter_instances, newConnection_fn).call(this);
        yield __privateMethod(this, _Restarter_instances, connect_fn).call(this);
        this.reauther.makeAuthentication(this.connection);
        this.resubscriber.makeSubscriptions(this.connection);
        this.pinger.startPing(this.connection, this);
        this.reconnecting = false;
      });
    }
    closeCurrentConnection() {
      var _a;
      this.pinger.stop();
      var closed = (_a = this.connection) == null ? void 0 : _a.close();
      return closed;
    }
    close() {
      this.closeRequested = true;
      var closed = this.closeCurrentConnection();
      return closed;
    }
  };
  _Restarter_instances = new WeakSet();
  connect_fn = function() {
    return __async(this, null, function* () {
      while (!this.closeRequested) {
        try {
          yield Promise.race([
            this.connection.connect(),
            new Promise((resolve, reject) => setTimeout(reject, 1e4))
          ]);
          return;
        } catch (e) {
        }
      }
    });
  };
  newConnection_fn = function() {
    var _a, _b;
    return new WebsocketConnection({
      domain: this.connectionConfiguration.domain,
      peekMessageIn: this.connectionConfiguration.peekMessageIn,
      peekMessageOut: this.connectionConfiguration.peekMessageOut,
      websocketHooks: {
        onMessage: (_a = this.connectionConfiguration.websocketHooks) == null ? void 0 : _a.onMessage,
        onOpen: (_b = this.connectionConfiguration.websocketHooks) == null ? void 0 : _b.onOpen,
        onError: (event) => {
          var _a2, _b2;
          if (this.reconnecting) {
            return;
          }
          (_b2 = (_a2 = this.connectionConfiguration.websocketHooks) == null ? void 0 : _a2.onError) == null ? void 0 : _b2.call(_a2, event);
        },
        onClose: (event) => {
          var _a2, _b2;
          if (this.reconnecting || !this.closeRequested) {
            return;
          }
          (_b2 = (_a2 = this.connectionConfiguration.websocketHooks) == null ? void 0 : _a2.onClose) == null ? void 0 : _b2.call(_a2, event);
        }
      }
    });
  };

  // lib/core/websocket/restartingWebsocketConnection.ts
  var RestartingWebsocketConnection = class {
    constructor(params) {
      this.restarter = params.restarter;
    }
    apRequest(endpoint, requestType, message) {
      if (endpoint === "LogOut" /* LOGOUT */) {
        this.restarter.getReauther().removeAuthentication();
      }
      return this.restarter.getConnection().apRequest(endpoint, requestType, message);
    }
    nbRequest(endpoint, requestType, message, paged) {
      throw new Error("websocket client does not support nb methods.");
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        yield this.restarter.getConnection().authenticateUser(params);
        this.restarter.getReauther().updateAuthentication((connection) => connection.authenticateUser(params));
      });
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionHandlers) {
      return __async(this, null, function* () {
        yield this.restarter.getConnection().subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionHandlers);
        this.restarter.getResubscriber().saveSubscription({
          endpoint,
          firstIdentifier,
          secondIdentifier,
          message,
          subscriptionHandlers
        });
      });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
      return __async(this, null, function* () {
        yield this.restarter.getConnection().unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids);
        this.restarter.getResubscriber().removeSubscription(callback_ids);
      });
    }
    get readyState() {
      return this.restarter.getConnection().readyState;
    }
    connect() {
      return this.restarter.reconnect();
    }
    close() {
      return this.restarter.close();
    }
  };

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
  var SubscriptionService = class {
    constructor(connection) {
      this.OMS_ID = 1;
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#subscribelevel1
     */
    subscribeLevel1(request, snapshotHandler, updateHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */,
        request.InstrumentId || null,
        null,
        requestWithOMSId,
        [
          newHandler("SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */, snapshotHandler),
          newHandler("Level1UpdateEvent" /* UPDATE_LEVEL1 */, updateHandler)
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel1
     */
    unsubscribeLevel1(request) {
      return __async(this, null, function* () {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        yield this.connection.unsubscribe(
          "UnsubscribeLevel1" /* UNSUBSCRIBE_LEVEL1 */,
          request.InstrumentId || null,
          null,
          requestWithOMSId,
          ["SubscribeLevel1" /* SUBSCRIBE_LEVEL1 */, "UnsubscribeLevel1" /* UNSUBSCRIBE_LEVEL1 */]
        );
      });
    }
    /**
     * https://apidoc.notbank.exchange/#subscribelevel2
     */
    subscribeLevel2(request, snapshotHandler, updateHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */,
        request.InstrumentId,
        null,
        requestWithOMSId,
        [
          newHandler("SubscribeLevel2" /* SUBSCRIBE_LEVEL2 */, snapshotHandler),
          newHandler("Level2UpdateEvent" /* UPDATE_LEVEL2 */, updateHandler)
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribelevel2
     */
    unsubscribeLevel2(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
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
    }
    /**
     * https://apidoc.notbank.exchange/#subscribetrades
     */
    subscribeTrades(request, subcriptionHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
        "SubscribeTrades" /* SUBSCRIBE_TRADES */,
        request.InstrumentId,
        null,
        requestWithOMSId,
        [
          newHandler(
            "SubscribeTrades" /* SUBSCRIBE_TRADES */,
            (mapTrade) => subcriptionHandler(parseTradeSummary(mapTrade))
          )
        ]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribetrades
     */
    unsubscribeTrades(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeTrades" /* UNSUBSCRIBE_TRADES */,
        request.InstrumentId,
        null,
        requestWithOMSId,
        ["SubscribeTrades" /* SUBSCRIBE_TRADES */]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeticker
     */
    subscribeTicker(request, snapshotHandler, updateHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
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
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeticker
     */
    unsubscribeTicker(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeTicker" /* UNSUBSCRIBE_TICKER */,
        request.InstrumentId || null,
        null,
        requestWithOMSId,
        ["SubscribeTicker" /* SUBSCRIBE_TICKER */]
      );
    }
    /**
     * https://apidoc.notbank.exchange/#subscribeaccountevents
     */
    subscribeAccountEvents(request, eventHandlers) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
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
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeaccountevents
     */
    unsubscribeAccountEvents(request) {
      return __async(this, null, function* () {
        const requestWithOMSId = completeParams(request, this.OMS_ID);
        return this.connection.unsubscribe(
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
    /**
     * https://apidoc.notbank.exchange/#subscribeorderstateevents
     */
    subscribeOrderStateEvents(request, subscriptionHandler) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.subscribe(
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
    }
    /**
     * https://apidoc.notbank.exchange/#unsubscribeorderstateevents
     */
    unsubscribeOrderStateEvents(request) {
      const requestWithOMSId = completeParams(request, this.OMS_ID);
      return this.connection.unsubscribe(
        "UnsubscribeOrderStateEvents" /* UNSUBSCRIBE_ORDER_STATE_EVENTS */,
        request.AccountId,
        request.InstrumentId || null,
        requestWithOMSId,
        ["SubscribeOrderStateEvents" /* SUBSCRIBE_ORDER_STATE_EVENTS */]
      );
    }
  };

  // lib/services/websocketServiceFactory.ts
  var WebsocketServiceFactory = class {
    constructor(configuration) {
      var connection = (configuration == null ? void 0 : configuration.withReconnect) ? new RestartingWebsocketConnection({
        restarter: new Restarter({ connectionConfiguration: configuration || {} })
      }) : new WebsocketConnection(configuration);
      this.serviceConnection = connection;
      this.getReadyState = () => connection.readyState;
    }
    connect() {
      return this.serviceConnection.connect();
    }
    close() {
      return this.serviceConnection.close();
    }
    get isConnecting() {
      return this.getReadyState() === WebSocket.CONNECTING;
    }
    get isConnected() {
      return this.getReadyState() === WebSocket.OPEN;
    }
    get isClosing() {
      return this.getReadyState() === WebSocket.CLOSING;
    }
    get isClosed() {
      return this.getReadyState() === WebSocket.CLOSED;
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
        yield this.serviceConnection.authenticateUser({
          APIKey: params.ApiPublicKey,
          Signature: signature,
          UserId: params.UserId,
          Nonce: nonce
        });
      });
    }
    getConnection() {
      return this.serviceConnection;
    }
    newAccountService() {
      return new AccountService(this.serviceConnection);
    }
    newAuthService() {
      return new AuthService(this.serviceConnection);
    }
    newFeeService() {
      return new FeeService(this.serviceConnection);
    }
    newInstrumentService() {
      return new InstrumentService(this.serviceConnection);
    }
    newProductService() {
      return new ProductService(this.serviceConnection);
    }
    newReportService() {
      return new ReportService(this.serviceConnection);
    }
    newSystemService() {
      return new SystemService(this.serviceConnection);
    }
    getSubscriptionService() {
      return new SubscriptionService(this.serviceConnection);
    }
    newTradingService() {
      return new TradingService(this.serviceConnection);
    }
    newUserService() {
      return new UserService(this.serviceConnection);
    }
    newWalletService() {
      return new WalletService(this.serviceConnection);
    }
    newQuoteService() {
      return new QuoteService(this.serviceConnection);
    }
  };

  // lib/services/notbankClient.ts
  var DEFAULT_DOMAIN3 = "api.notbank.exchange";
  var _NotbankClient = class _NotbankClient {
    constructor(params) {
      this.connection = params.connection;
      this.accountService = params.accountService;
      this.authService = params.authService;
      this.feeService = params.feeService;
      this.instrumentService = params.instrumentService;
      this.productService = params.productService;
      this.reportService = params.reportService;
      this.getSubscriptionService = () => params.getSubscriptionService();
      this.systemService = params.systemService;
      this.tradingService = params.tradingService;
      this.userService = params.userService;
      this.walletService = params.walletService;
      this.quoteService = params.quoteService;
      this.authenticateUser = params.authenticate;
      this.connect = params.connect;
      this.close = params.close;
    }
    getAccountService() {
      return this.accountService;
    }
    getAuthService() {
      return this.authService;
    }
    getFeeService() {
      return this.feeService;
    }
    getInstrumentService() {
      return this.instrumentService;
    }
    getProductService() {
      return this.productService;
    }
    getReportService() {
      return this.reportService;
    }
    getSystemService() {
      return this.systemService;
    }
    getTradingService() {
      return this.tradingService;
    }
    getUserService() {
      return this.userService;
    }
    getWalletService() {
      return this.walletService;
    }
    getQuoteService() {
      return this.quoteService;
    }
    getConnection() {
      return this.connection;
    }
  };
  _NotbankClient.Factory = class Factory {
    static createRestClient(domain = DEFAULT_DOMAIN3) {
      var factory = new HttpServiceFactory(domain);
      return new _NotbankClient({
        connection: factory.getConnection(),
        accountService: factory.newAccountService(),
        authService: factory.newAuthService(),
        feeService: factory.newFeeService(),
        instrumentService: factory.newInstrumentService(),
        productService: factory.newProductService(),
        reportService: factory.newReportService(),
        getSubscriptionService: () => {
          throw new NotbankError("NotbankError. subcription service only exists for websocket connection", -1);
        },
        systemService: factory.newSystemService(),
        tradingService: factory.newTradingService(),
        userService: factory.newUserService(),
        walletService: factory.newWalletService(),
        quoteService: factory.newQuoteService(),
        authenticate: (params) => factory.authenticateUser(params),
        connect: () => Promise.resolve(null),
        close: () => Promise.resolve(null)
      });
    }
    static createWebsocketClient(configuration) {
      var factory = new WebsocketServiceFactory(configuration);
      return new _NotbankClient(
        {
          connection: factory.getConnection(),
          accountService: factory.newAccountService(),
          authService: factory.newAuthService(),
          feeService: factory.newFeeService(),
          instrumentService: factory.newInstrumentService(),
          productService: factory.newProductService(),
          reportService: factory.newReportService(),
          getSubscriptionService: () => factory.getSubscriptionService(),
          systemService: factory.newSystemService(),
          tradingService: factory.newTradingService(),
          userService: factory.newUserService(),
          walletService: factory.newWalletService(),
          quoteService: factory.newQuoteService(),
          authenticate: (params) => factory.authenticateUser(params),
          connect: () => factory.connect(),
          close: () => factory.close()
        }
      );
    }
  };
  var NotbankClient = _NotbankClient;
  return __toCommonJS(index_exports);
})();
