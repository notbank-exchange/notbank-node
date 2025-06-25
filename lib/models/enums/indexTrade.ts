export interface IndexTrade {
  TradeId: number;
  InstrumentId: number;
  Quantity: number;
  Price: number;
  Order1: number;
  Order2: number;
  Tradetime: number;
  Direction: number;
  TakerSide: number;
  BlockTrade: boolean;
  OrderClientId: number;
}
