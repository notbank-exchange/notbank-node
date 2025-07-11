import { OrderSide } from "../enums/orderSide";
import { OrderTypeInt } from "../enums/orderType";
import { PegPriceType } from "../enums/pegPriceType";
import { TimeInForce } from "../enums/timeInForce";

export interface CancelReplaceOrderRequest {
  OrderIdToReplace: number; // Obligatorio: ID de la orden a reemplazar
  ClientOrderId?: number; // Opcional: ID para la nueva orden (debe ser único)
  OrderType: OrderTypeInt; // Obligatorio: Tipo de la nueva orden
  Side: OrderSide; // Obligatorio: Lado del trade
  AccountId: number; // Obligatorio: ID de la cuenta asociada
  InstrumentId: number; // Obligatorio: ID del instrumento
  UseDisplayQuantity?: boolean; // Opcional: True si la cantidad visible aplica
  DisplayQuantity?: number; // Opcional: Cantidad visible (si aplica)
  LimitPrice?: number; // Opcional: Precio límite (para órdenes límite)
  StopPrice?: number; // Opcional: Precio objetivo (para órdenes stop)
  ReferencePrice?: number; // Opcional: Precio de referencia (para trailing)
  PegPriceType?: PegPriceType; // Opcional: Tipo de precio (Stop y Trailing)
  TimeInForce: TimeInForce; // Obligatorio: Tiempo de ejecución
  OrderIdOCO?: number; // Opcional: Vinculación para One Cancels the Other
  Quantity: number; // Obligatorio: Cantidad
}
