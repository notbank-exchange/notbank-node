import { OrderSide } from "./orderSide.js";
import { OrderTypeInt } from "./orderType.js";
import { PegPriceType } from "./pegPriceType.js";
import { TimeInForce } from "./timeInForce.js";
export interface CancelReplaceOrder {
    ReplaceOrderId: number;
    ReplaceClientOrderId?: number;
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
