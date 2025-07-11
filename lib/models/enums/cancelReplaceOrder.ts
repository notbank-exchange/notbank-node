import { OrderSide } from "./orderSide";
import { OrderTypeInt } from "./orderType";
import { PegPriceType } from "./pegPriceType";
import { TimeInForce } from "./timeInForce";

export interface CancelReplaceOrder {
  ReplaceOrderId: number; // Obligatorio: ID de la orden a reemplazar
  ReplaceClientOrderId?: number; // Opcional: ID del cliente para la orden existente
  ClientOrderId?: number; // Opcional: Nuevo ID del cliente, único por working order
  OrderType: OrderTypeInt; // Obligatorio: Tipo de la nueva orden
  Side: OrderSide; // Obligatorio: Lado del trade
  AccountId: number; // Obligatorio: ID de la cuenta propietaria de las órdenes
  InstrumentId: number; // Obligatorio: ID del instrumento
  UseDisplayQuantity?: boolean; // Opcional: Define si la cantidad es visible
  DisplayQuantity?: number; // Opcional: Cantidad visible en el libro de órdenes
  LimitPrice?: number; // Opcional: Precio límite (solo para órdenes límite)
  StopPrice?: number; // Opcional: Precio objetivo (para órdenes Stop)
  ReferencePrice?: number; // Opcional: Precio base (para órdenes Trailing)
  PegPriceType?: PegPriceType; // Opcional: Tipo de precio para Stop/Trailing
  TimeInForce: TimeInForce; // Obligatorio: Tiempo de ejecución de la nueva orden
  OrderIdOCO?: number; // Opcional: Orden vinculada a otra (One Cancels the Other)
  Quantity: number; // Obligatorio: Cantidad de la nueva orden
}
