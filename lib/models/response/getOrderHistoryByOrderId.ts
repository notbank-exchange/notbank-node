import { ChangeReason } from "../common/changeReason";
import { OrderState } from "../common/orderState";
import { OrderTypeInt } from "../common/orderType";
import { OrderFlag } from "../enums/orderFlag";
import { TradeSide } from "../enums/tradeSide";

export interface GetOrderHistoryByOrderIdResponse {
  Side: TradeSide; // Lado de la orden (Buy, Sell, etc.)
  OrderId: number; // ID de la orden
  Price: number; // Precio al que se colocó la orden
  Quantity: number; // Cantidad del producto comerciado
  DisplayQuantity: number; // Cantidad a mostrar en el libro de ordenes
  Instrument: number; // ID del instrumento
  Account: number; // ID de la cuenta propietaria de la orden
  AccountName: string; // Nombre de la cuenta propietaria
  OrderType: OrderTypeInt; // Tipo de orden (Market, Limit, etc.)
  ClientOrderId: number; // ID del cliente que envió la orden
  OrderState: OrderState; // Estado actual de la orden
  ReceiveTime: number; // Tiempo de recepción en POSIX x 1000
  ReceiveTimeTicks: number; // Tiempo de recepción en formato de Ticks
  LastUpdatedTime: number; // Última actualización en POSIX x 1000
  LastUpdatedTimeTicks: number; // Última actualización en ticks
  OrigQuantity: number; // Cantidad original de la orden
  QuantityExecuted: number; // Cantidad ejecutada
  GrossValueExecuted: number; // Valor bruto ejecutado
  ChangeReason: ChangeReason; // Razón del estado actual
  OrderFlag: OrderFlag[]; // Flags asociadas a la orden
  StopPrice?: number; // Precio de stop (si aplica)
}
