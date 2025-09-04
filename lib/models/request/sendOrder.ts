import { OrderSide } from "../enums/orderSide";
import { OrderTypeInt } from "../enums/orderType";
import { PegPriceType } from "../enums/pegPriceType";
import { TimeInForce } from "../enums/timeInForce";

export interface SendOrderRequest {
  InstrumentId: number; // ID del instrumento (requerido)
  AccountId: number; // ID de cuenta asociada (requerido)
  TimeInForce: TimeInForce; // Tiempo aplicable (requerido)
  ClientOrderId?: number; // ID único generado por cliente (opcional)
  OrderIdOCO?: number; // Referencia a otra orden para OCO (opcional)
  UseDisplayQuantity?: boolean; // Mostrar cantidad parcial/reservas, opcional
  Side: OrderSide; // BUY (0) o SELL (1), requerido
  Quantity?: number; // Cantidad del instrumento (opcional según tipo de orden)
  OrderType: OrderTypeInt; // Tipo de la orden (requerido)
  PegPriceType?: PegPriceType; // Usado para órdenes STOP/TRAILING
  LimitPrice?: number; // Precio límite (requerido para certain OrderTypes)
  StopPrice?: number; // Precio de activación (usado para StopOrders, opcional)
  TrailingAmount?: number; // Monto del trailing (opcional si aplica)
  LimitOffset?: number; // Usado para TrailingStopLimit (opcional si aplica)
  DisplayQuantity?: number; // Cantidad visible en el libro de órdenes
  Value?: number; // Valor de la orden solo para Market Orders (opcional)
  PostOnly?: boolean;
}
