import { OrderSide } from "./orderSide";
import { OrderTypeInt } from "./orderType";
import { PegPriceType } from "./pegPriceType";
import { TimeInForce } from "./timeInForce";

export interface SendOrder {
  InstrumentId: number; // Obligatorio
  AccountId: number; // Obligatorio
  TimeInForce: TimeInForce; // Tiempo de ejecución
  ClientOrderId?: number; // Opcional (por defecto: 0)
  OrderIdOCO?: number; // Opcional: One Cancels the Other
  UseDisplayQuantity?: boolean; // Opcional: Si es una orden reserva
  Side: OrderSide; // Obligatorio: Lado de la orden
  Quantity: number; // Obligatorio: Cantidad de instrumento
  OrderType: OrderTypeInt; // Obligatorio: Tipo de orden
  PegPriceType?: PegPriceType; // Opcional, por defecto Last (1)
  LimitPrice?: number; // Opcional: Precio límite
  DisplayQuantity?: number; // Opcional: Cantidad visible si es una reserva
}
