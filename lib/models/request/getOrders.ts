// src/models/request/getOrders.ts
export interface GetOrdersRequest {
  AccountId: number; // Required: ID of the account
  OrderState?: string; // Optional: Filter by order state
  OrderId?: number; // Optional: Filter by order ID
  ClientOrderId?: number; // Optional: Filter by client order ID
  OriginalOrderId?: number; // Optional: Filter by original order ID
  OriginalClientOrderId?: number; // Optional: Filter by original client order ID
  UserId?: number; // Optional: Filter by user ID
  InstrumentId?: number; // Optional: Filter by instrument ID
  StartTimestamp?: number; // Optional: Filter by start timestamp
  EndTimestamp?: number; // Optional: Filter by end timestamp
  Depth?: number; // Optional: Maximum count of orders to return
  Limit?: number; // Optional: Functions same as Depth
  StartIndex?: number; // Optional: Pagination start index
}
