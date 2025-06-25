import { TradeType } from "../enums/tradeType";

// TODO: when used, convert to an equivalent pascalCase interface, same with other snake_case interfaces (optionaly, keep them snake_case, so it is equal to (not so standarized) docs)
export interface TradesResponse {
  trade_id: number;
  price: number;
  base_volume: number;
  quote_volume: number;
  timestamp: string;
  type: TradeType;
}
