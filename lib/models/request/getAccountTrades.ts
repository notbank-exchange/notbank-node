// src/models/request/getAccountTrades.ts
export interface GetAccountTradesRequest {
  AccountId?: number; // Optional: ID of the account
  StartIndex?: number; // Optional: Start index for pagination
  Depth?: number; // Optional: Number of trades to return (up to 200)
  InstrumentId?: number; // Optional: Filter by instrument ID
  TradeId?: number; // Optional: Filter by trade ID
  OrderId?: number; // Optional: Filter by order ID
  StartTimestamp?: number; // Optional: Filter by start timestamp
  EndTimestamp?: number; // Optional: Filter by end timestamp
  ExecutionId?: number; // Optional: Filter by execution ID
}
