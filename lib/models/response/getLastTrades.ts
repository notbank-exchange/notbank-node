export interface GetLastTradeResponse {
  TradeId: number; // ID of the trade
  InstrumentId: number; // ID of the instrument
  Quantity: number; // Quantity traded
  Price: number; // Price at which the trade occurred
  Order1: number; // ID of the first order
  Order2: number; // ID of the second order
  TradeTime: number; // UTC trade time in milliseconds (POSIX format)
  Direction: number; // Effect on the market price (0: NoChange, 1: UpTick, 2: DownTick)
  TakerSide: number; // Taker side (0: Buy, 1: Sell)
  BlockTrade: boolean; // Is it a block trade?
  ClientOrderId: number; // Client-supplied order ID
}
