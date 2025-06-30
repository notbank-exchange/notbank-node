import { IndexTrade } from "../models/enums/indexTrade.js";
export declare function parseIndexTrade(jsonTrade: number[] | {
    [key: number]: number;
}): IndexTrade;
