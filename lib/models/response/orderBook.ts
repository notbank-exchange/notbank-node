export interface OrderBookResponse {
  timestamp: number; // Unix timestamp (in milliseconds).
  bids: number[][]; // Array of [quantity, price] for buy orders.
  asks: number[][]; // Array of [quantity, price] for sell orders.
}
