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
    default: () => index_default
  });

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
    NotbankError: () => NotbankError,
    OrderFlag: () => OrderFlag,
    OrderSide: () => OrderSide,
    OrderState: () => OrderState,
    OrderTypeInt: () => OrderTypeInt,
    OrderTypeStr: () => OrderTypeStr,
    PegPriceType: () => PegPriceType,
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
        var jsonResponse = yield __privateMethod(_a = _NbResponseHandler, _NbResponseHandler_static, getData_fn).call(_a, response);
        if (!jsonResponse) {
          throw new NotbankError("http error. (status=" + response.status + ")", -1);
        }
        var nbResponse = jsonResponse;
        if ((nbResponse == null ? void 0 : nbResponse.status) === "success") {
          return paged ? jsonResponse : nbResponse.data;
        }
        throw NotbankError.Factory.createFromNbResponse(nbResponse);
      });
    }
  };
  _NbResponseHandler_static = new WeakSet();
  getData_fn = function(response) {
    return __async(this, null, function* () {
      try {
        return yield response.json();
      } catch (err) {
        return null;
      }
    });
  };
  __privateAdd(_NbResponseHandler, _NbResponseHandler_static);
  var NbResponseHandler = _NbResponseHandler;

  // lib/core/http/requester.ts
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
      var url = config.requestType === "POST" /* POST */ ? config.url : this.getUrlWithSearchParams(config.url, config.params);
      var body = config.requestType === "POST" /* POST */ ? config.params : null;
      var requestData = {
        method: config.requestType,
        headers: this.getHeaders(config.extraHeaders)
      };
      if (body) {
        requestData.body = JSON.stringify(body);
      }
      return fetch(url, requestData);
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
    getProducts(params) {
      return __async(this, null, function* () {
        const paramsWithOMSId = completeParams(params, this.OMS_ID);
        return this.connection.apRequest(
          "GetProducts" /* GET_PRODUCTS */,
          "POST" /* POST */,
          paramsWithOMSId
        );
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
  var WalletService = class {
    constructor(connection) {
      this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request) {
      return this.connection.nbRequest(
        "banks" /* BANKS */,
        "GET" /* GET */,
        request,
        true
      );
    }
    /**
     * https://apidoc.notbank.exchange/#createbankaccount
     */
    createBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */,
        "POST" /* POST */,
        request
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getbankaccount
     */
    getBankAccount(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */ + "/" + request.bankAccountId,
        "GET" /* GET */
      );
    }
    /**
     * https://apidoc.notbank.exchange/#getbankaccounts
     */
    getBankAccounts(request) {
      return this.connection.nbRequest(
        "bank-accounts" /* BANK_ACCOUNTS */,
        "GET" /* GET */,
        request,
        true
      );
    }
    /**
     * https://apidoc.notbank.exchange/#deletebankaccount
     */
    deleteBankAccount(request) {
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
        "bank-accounts" /* BANK_ACCOUNTS */,
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
        "wallet/crypto/whitelist-addresses" /* WHITELIST_ADDRESSES */ + "/" + request.whitelistedAddressId,
        "POST" /* POST */,
        { "code": request.code }
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
          "account_id": request.account_id,
          "otp": request.otp
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
  };
  _httpConnection = new WeakMap();

  // lib/core/websocket/websocketClient.ts
  var import_universal_websocket_client = __toESM(require_browser(), 1);

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
  var _domain, _callbackManager, _websocket, _peekMessageIn, _peekMessageOut, _WebsocketConnection_instances, getSubscriptionCallbackId_fn, handleMessage_fn, request_fn, handleRequestResponse_fn, requestToCallback_fn;
  var WebsocketConnection = class {
    constructor(params) {
      __privateAdd(this, _WebsocketConnection_instances);
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
    nbRequest(endpoint, requestType, message) {
      throw new Error("websocket client does not support nb methods.");
    }
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
          __privateMethod(this, _WebsocketConnection_instances, handleMessage_fn).call(this, messageFrame);
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
    apRequest(endpoint, requestType, message) {
      return __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
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
        return __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
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
        return yield __privateMethod(this, _WebsocketConnection_instances, request_fn).call(this, endpoint, message, 0 /* REQUEST */);
      });
    }
    closeConnection() {
      __privateGet(this, _websocket).socket.close();
    }
    authenticateUser(params) {
      return __async(this, null, function* () {
        yield this.apRequest("AuthenticateUser" /* AUTHENTICATE_USER */, "NONE" /* NONE */, params);
      });
    }
  };
  _domain = new WeakMap();
  _callbackManager = new WeakMap();
  _websocket = new WeakMap();
  _peekMessageIn = new WeakMap();
  _peekMessageOut = new WeakMap();
  _WebsocketConnection_instances = new WeakSet();
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
    const callbackId = __privateMethod(this, _WebsocketConnection_instances, getSubscriptionCallbackId_fn).call(this, message);
    const subscriptionCallback = __privateGet(this, _callbackManager).getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
      subscriptionCallback(message);
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

  // lib/services/websocketServicesFactory.ts
  var DEFAULT_DOMAIN2 = "api.notbank.exchange";
  var _websocketConnection, _subcriptionService;
  var WebsocketServiceFactory = class {
    constructor(params) {
      __privateAdd(this, _websocketConnection);
      __privateAdd(this, _subcriptionService);
      const finalDomain = (params == null ? void 0 : params.domain) || DEFAULT_DOMAIN2;
      __privateSet(this, _websocketConnection, new WebsocketConnection({
        domain: finalDomain,
        peekMessageIn: params == null ? void 0 : params.peekMessageIn,
        peekMessageOut: params == null ? void 0 : params.peekMessageOut
      }));
    }
    connect(hooks = {}) {
      return __privateGet(this, _websocketConnection).connect(hooks);
    }
    close() {
      __privateGet(this, _websocketConnection).close();
    }
    get isConnecting() {
      return __privateGet(this, _websocketConnection).readyState === WebSocket.CONNECTING;
    }
    get isConnected() {
      return __privateGet(this, _websocketConnection).readyState === WebSocket.OPEN;
    }
    get isClosing() {
      return __privateGet(this, _websocketConnection).readyState === WebSocket.CLOSING;
    }
    get isClosed() {
      return __privateGet(this, _websocketConnection).readyState === WebSocket.CLOSED;
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
        yield __privateGet(this, _websocketConnection).authenticateUser({
          APIKey: params.ApiPublicKey,
          Signature: signature,
          UserId: params.UserId,
          Nonce: nonce
        });
      });
    }
    newAccountService() {
      return new AccountService(__privateGet(this, _websocketConnection));
    }
    newAuthService() {
      return new AuthService(__privateGet(this, _websocketConnection));
    }
    newFeeService() {
      return new FeeService(__privateGet(this, _websocketConnection));
    }
    newInstrumentService() {
      return new InstrumentService(__privateGet(this, _websocketConnection));
    }
    newProductService() {
      return new ProductService(__privateGet(this, _websocketConnection));
    }
    newReportService() {
      return new ReportService(__privateGet(this, _websocketConnection));
    }
    newSystemService() {
      return new SystemService(__privateGet(this, _websocketConnection));
    }
    getSubscriptionService() {
      if (__privateGet(this, _subcriptionService)) {
        return __privateGet(this, _subcriptionService);
      }
      __privateSet(this, _subcriptionService, new SubscriptionService(__privateGet(this, _websocketConnection)));
      return __privateGet(this, _subcriptionService);
    }
    newTradingService() {
      return new TradingService(__privateGet(this, _websocketConnection));
    }
    newUserService() {
      return new UserService(__privateGet(this, _websocketConnection));
    }
    newWalletService() {
      return new WalletService(__privateGet(this, _websocketConnection));
    }
  };
  _websocketConnection = new WeakMap();
  _subcriptionService = new WeakMap();

  // lib/services/notbankClient.ts
  var DEFAULT_DOMAIN3 = "api.notbank.exchange";
  var _accountService, _authService, _feeService, _instrumentService, _productService, _reportService, _getSubscriptionService, _systemService, _tradingService, _userService, _walletService, _authenticateUser, _connect, _close;
  var _NotbankClient = class _NotbankClient {
    constructor(params) {
      __privateAdd(this, _accountService);
      __privateAdd(this, _authService);
      __privateAdd(this, _feeService);
      __privateAdd(this, _instrumentService);
      __privateAdd(this, _productService);
      __privateAdd(this, _reportService);
      __privateAdd(this, _getSubscriptionService);
      __privateAdd(this, _systemService);
      __privateAdd(this, _tradingService);
      __privateAdd(this, _userService);
      __privateAdd(this, _walletService);
      __privateAdd(this, _authenticateUser);
      __privateAdd(this, _connect);
      __privateAdd(this, _close);
      __privateSet(this, _accountService, params.accountService);
      __privateSet(this, _authService, params.authService);
      __privateSet(this, _feeService, params.feeService);
      __privateSet(this, _instrumentService, params.instrumentService);
      __privateSet(this, _productService, params.productService);
      __privateSet(this, _reportService, params.reportService);
      __privateSet(this, _getSubscriptionService, params.getSubscriptionService);
      __privateSet(this, _systemService, params.systemService);
      __privateSet(this, _tradingService, params.tradingService);
      __privateSet(this, _userService, params.userService);
      __privateSet(this, _walletService, params.walletService);
      __privateSet(this, _authenticateUser, params.authenticate);
      __privateSet(this, _connect, params.connect);
      __privateSet(this, _close, params.close);
    }
    authenticateUser(params) {
      return __privateGet(this, _authenticateUser).call(this, params);
    }
    getAccountService() {
      return __privateGet(this, _accountService);
    }
    getAuthService() {
      return __privateGet(this, _authService);
    }
    getFeeService() {
      return __privateGet(this, _feeService);
    }
    getInstrumentService() {
      return __privateGet(this, _instrumentService);
    }
    getProductService() {
      return __privateGet(this, _productService);
    }
    getReportService() {
      return __privateGet(this, _reportService);
    }
    getSubscriptionService() {
      return __privateGet(this, _getSubscriptionService).call(this);
    }
    getSystemService() {
      return __privateGet(this, _systemService);
    }
    getTradingService() {
      return __privateGet(this, _tradingService);
    }
    getUserService() {
      return __privateGet(this, _userService);
    }
    getWalletService() {
      return __privateGet(this, _walletService);
    }
    connect(hooks = {}) {
      return __privateGet(this, _connect).call(this, hooks);
    }
    close() {
      __privateGet(this, _close).call(this);
    }
  };
  _accountService = new WeakMap();
  _authService = new WeakMap();
  _feeService = new WeakMap();
  _instrumentService = new WeakMap();
  _productService = new WeakMap();
  _reportService = new WeakMap();
  _getSubscriptionService = new WeakMap();
  _systemService = new WeakMap();
  _tradingService = new WeakMap();
  _userService = new WeakMap();
  _walletService = new WeakMap();
  _authenticateUser = new WeakMap();
  _connect = new WeakMap();
  _close = new WeakMap();
  _NotbankClient.Factory = class Factory {
    static createRestClient(domain = DEFAULT_DOMAIN3) {
      var factory = new HttpServiceFactory(domain);
      return new _NotbankClient(
        {
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
          authenticate: (params) => factory.authenticateUser(params),
          connect: () => null,
          close: () => null
        }
      );
    }
    static createWebsocketClient(domain = DEFAULT_DOMAIN3) {
      var factory = new WebsocketServiceFactory({ domain });
      return new _NotbankClient(
        {
          accountService: factory.newAccountService(),
          authService: factory.newAuthService(),
          feeService: factory.newFeeService(),
          instrumentService: factory.newInstrumentService(),
          productService: factory.newProductService(),
          reportService: factory.newReportService(),
          getSubscriptionService: factory.getSubscriptionService,
          systemService: factory.newSystemService(),
          tradingService: factory.newTradingService(),
          userService: factory.newUserService(),
          walletService: factory.newWalletService(),
          authenticate: (params) => factory.authenticateUser(params),
          connect: () => factory.connect(),
          close: () => factory.close()
        }
      );
    }
  };
  var NotbankClient = _NotbankClient;

  // lib/index.ts
  var index_default = {
    NotbankClient,
    models: models_exports
  };
  return __toCommonJS(index_exports);
})();
