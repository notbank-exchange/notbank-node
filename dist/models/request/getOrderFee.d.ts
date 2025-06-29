import { MakerTaker } from "../common/makerTaker.js";
import { OrderTypeInt } from "../common/orderType.js";
import { TradeSide } from "../enums/tradeSide.js";
export interface GetOrderFeeRequest {
    AccountId: number;
    InstrumentId: number;
    Quantity: number;
    Price: number;
    OrderType: OrderTypeInt;
    MakerTaker: MakerTaker;
    Side: TradeSide;
}
