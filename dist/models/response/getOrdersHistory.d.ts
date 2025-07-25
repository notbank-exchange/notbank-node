import { ChangeReason } from "../enums/changeReason.js";
import { OrderState } from "../enums/orderState.js";
import { OrderTypeStr } from "../enums/orderType.js";
import { OrderSide } from "../enums/orderSide.js";
export interface GetOrdersHistoryResponse {
    Side: OrderSide;
    OrderId: number;
    Price: number;
    Quantity: number;
    DisplayQuantity: number;
    Instrument: number;
    Account: number;
    AccountName: string;
    OrderType: OrderTypeStr;
    ClientOrderId: number;
    OrderState: OrderState;
    ReceiveTime: number;
    ReceiveTimeTicks: number;
    LastUpdatedTime: number;
    LastUpdatedTimeTicks: number;
    OrigQuantity: number;
    QuantityExecuted: number;
    GrossValueExecuted: number;
    AvgPrice: number;
    ChangeReason: ChangeReason;
    OrigOrderId?: number;
    EnteredBy: number;
    UserName: string;
    IsQuote: boolean;
    LastTradePrice: number;
}
