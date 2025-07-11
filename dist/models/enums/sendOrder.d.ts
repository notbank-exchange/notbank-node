import { OrderSide } from "./orderSide.js";
import { OrderTypeInt } from "./orderType.js";
import { PegPriceType } from "./pegPriceType.js";
import { TimeInForce } from "./timeInForce.js";
export interface SendOrder {
    InstrumentId: number;
    AccountId: number;
    TimeInForce: TimeInForce;
    ClientOrderId?: number;
    OrderIdOCO?: number;
    UseDisplayQuantity?: boolean;
    Side: OrderSide;
    Quantity: number;
    OrderType: OrderTypeInt;
    PegPriceType?: PegPriceType;
    LimitPrice?: number;
    DisplayQuantity?: number;
}
