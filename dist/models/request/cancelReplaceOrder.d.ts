import { OrderSide } from "../common/orderSide.js";
import { OrderTypeInt } from "../common/orderType.js";
import { PegPriceType } from "../enums/pegPriceType.js";
import { TimeInForce } from "../enums/timeInForce.js";
export interface CancelReplaceOrderRequest {
    OrderIdToReplace: number;
    ClientOrderId?: number;
    OrderType: OrderTypeInt;
    Side: OrderSide;
    AccountId: number;
    InstrumentId: number;
    UseDisplayQuantity?: boolean;
    DisplayQuantity?: number;
    LimitPrice?: number;
    StopPrice?: number;
    ReferencePrice?: number;
    PegPriceType?: PegPriceType;
    TimeInForce: TimeInForce;
    OrderIdOCO?: number;
    Quantity: number;
}
