import { ActionType } from "./actionType";
import { SideType } from "./sideType";

/**
 * Interface que mapea cada elemento del snapshot Level 2.
 */
export interface Level2Ticker {
  MDUpdateId: number; // index 0
  NumberOfAccounts: number; // index 1
  ActionDateTime: number; // index 2 (POSIX x 1000)
  ActionType: ActionType; // index 3
  LastTradePrice: number; // index 4
  NumberOfOrders: number; // index 5
  Price: number; // index 6
  ProductPairCode: number; // index 7 (equivalente a InstrumentId)
  Quantity: number; // index 8
  Side: SideType; // index 9
}
