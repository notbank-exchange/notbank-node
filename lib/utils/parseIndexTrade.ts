import { TradeSummary } from "../models/enums/indexTrade";

export function parseTradeSummary(
  jsonTrade: number[] | { [key: number]: number }
): TradeSummary {
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
