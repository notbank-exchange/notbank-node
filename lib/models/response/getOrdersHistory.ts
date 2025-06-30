import { ChangeReason } from "../common/changeReason";
import { OrderState } from "../common/orderState";
import { OrderTypeStr } from "../common/orderType";
import { OrderSide } from "../common/orderSide";

export interface GetOrdersHistoryResponse {
  Side: OrderSide; // Lado de la orden (Buy/Sell)
  OrderId: number; // ID único de la orden
  Price: number; // Precio al que se colocó la orden
  Quantity: number; // Cantidad total de la orden
  DisplayQuantity: number; // Cantidad visible de la orden
  Instrument: number; // ID del instrumento
  Account: number; // ID de la cuenta
  AccountName: string; // Nombre de la cuenta
  OrderType: OrderTypeStr; // Tipo de la orden
  ClientOrderId: number; // ID del cliente para la orden
  OrderState: OrderState; // Estado actual de la orden
  ReceiveTime: number; // Marca de tiempo de recepción (POSIX)
  ReceiveTimeTicks: number; // Marca de tiempo de recepción (ticks de Microsoft)
  LastUpdatedTime: number; // Última actualización (POSIX)
  LastUpdatedTimeTicks: number; // Última actualización (ticks de Microsoft)
  OrigQuantity: number; // Cantidad original cuando se colocó
  QuantityExecuted: number; // Cantidad ya ejecutada
  GrossValueExecuted: number; // Valor bruto ejecutado
  AvgPrice: number; // Precio promedio ejecutado
  ChangeReason: ChangeReason; // Razón del último cambio en la orden
  OrigOrderId?: number; // ID de la orden original (si es reemplazo)
  EnteredBy: number; // ID del usuario que ingresó la orden
  UserName: string; // Nombre del usuario que ingresó la orden
  IsQuote: boolean; // Indica si es una cotización
  LastTradePrice: number; // Último precio negociado
}
