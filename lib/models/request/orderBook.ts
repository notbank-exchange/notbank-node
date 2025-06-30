export interface OrderBookRequest {
  Market_Pair: string; // The instrument symbol (e.g., "BTCUSD"). Required.
  Depth?: number; // The depth of the order book (for level 2). Optional.
  Level?: 1 | 2; // Level of the order book: 1 (best bid/ask only) or 2 (multiple depth levels). Optional.
}
