// src/models/response/getOpenTradeReports.ts
export interface OpenTradeReport {
  Side: string;
  OrderId: number;
  Price: number;
  Quantity: number;
  DisplayQuantity: number;
  Instrument: number;
  Account: number;
  AccountName: string;
  OrderType: string;
  ClientOrderId: number;
  OrderState: string;
  ReceiveTime: number;
  ReceiveTimeTicks: number;
  OrigQuantity: number;
  QuantityExecuted: number;
  GrossValueExecuted: number;
  AvgPrice: number;
  CounterPartyId: number;
  ChangeReason: string;
  OrigOrderId: number;
  OrigClOrdId: number;
  EnteredBy: number;
  Username: string;
  IsQuote: boolean;
  InsideAsk: number;
  InsideAskSize: number;
  InsideBid: number;
  InsideBidSize: number;
  LastTradePrice: number;
  RejectReason: string;
  IsLockedIn: boolean;
  CancelReason: string;
  CancelReasonDescription: string;
  UseMargin: boolean;
  StopPrice: number;
  PegPriceType: string;
  PegOffset: number;
  PegLimitOffset: number;
  IpAddress: string;
  OMSId: number;
}
