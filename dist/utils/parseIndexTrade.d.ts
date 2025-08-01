import { TradeSummary } from "../models/enums/indexTrade.js";
export declare function parseTradeSummary(jsonTrade: number[] | {
    [key: number]: number;
}): TradeSummary;
