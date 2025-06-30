import { ChangeReason } from "../common/changeReason.js";
import { OrderState } from "../common/orderState.js";
import { OrderTypeInt } from "../common/orderType.js";
import { OrderFlag } from "../enums/orderFlag.js";
import { TradeSide } from "../enums/tradeSide.js";
export interface GetOrderHistoryByOrderIdResponse {
    Side: TradeSide;
    OrderId: number;
    Price: number;
    Quantity: number;
    DisplayQuantity: number;
    Instrument: number;
    Account: number;
    AccountName: string;
    OrderType: OrderTypeInt;
    ClientOrderId: number;
    OrderState: OrderState;
    ReceiveTime: number;
    ReceiveTimeTicks: number;
    LastUpdatedTime: number;
    LastUpdatedTimeTicks: number;
    OrigQuantity: number;
    QuantityExecuted: number;
    GrossValueExecuted: number;
    ChangeReason: ChangeReason;
    OrderFlag: OrderFlag[];
    StopPrice?: number;
}
