import { ActionType } from "./actionType.js";
import { SideType } from "./sideType.js";
/**
 * Interface que mapea cada elemento del snapshot Level 2.
 */
export interface Level2Ticker {
    MDUpdateId: number;
    NumberOfAccounts: number;
    ActionDateTime: number;
    ActionType: ActionType;
    LastTradePrice: number;
    NumberOfOrders: number;
    Price: number;
    ProductPairCode: number;
    Quantity: number;
    Side: SideType;
}
