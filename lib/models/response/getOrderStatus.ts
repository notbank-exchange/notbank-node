import { ChangeReason } from "../common/changeReason";
import { OrderSide } from "../common/orderSide";
import { OrderState } from "../common/orderState";

export interface GetOrderStatusResponse {
  Side: OrderSide;
  OrderId: number;
  Price: number;
  Quantity: number;
  DisplayQuantity: number;
  Instrument: number;
  Account: number;
  AccountName: string;
  OrderType: string; // Ej. "Limit", "Market"
  ClientOrderId: number;
  OrderState: OrderState;
  ReceiveTime: number; // Timestamp en milisegundos (POSIX)
  ReceiveTimeTicks: number; // Timestamp en Microsoft Ticks UTC
  LastUpdatedTime?: number; // Última actualización en milisegundos (opcional)
  LastUpdatedTimeTicks?: number; // Última actualización en Ticks (opcional)
  OrigQuantity: number;
  QuantityExecuted: number;
  GrossValueExecuted: number;
  AvgPrice: number;
  CounterPartyId?: number; // Opcional, contraparte de la orden ejecutada
  ChangeReason: ChangeReason;
  OrigOrderId?: number; // Si es una orden de reemplazo, el ID de la original
  OrigClOrdId?: number; // ID de cliente original para la orden de reemplazo
  EnteredBy?: number;
  UserName: string; // Nombre del usuario que la ingresó
  IsQuote: boolean; // true si es una "quote", otherwise false
  InsideAsk?: number; // Solo para quotes: Mejor precio de venta
  InsideAskSize?: number; // Cantidad del mejor precio de venta
  InsideBid?: number; // Solo para quotes: Mejor precio de compra
  InsideBidSize?: number; // Cantidad del mejor precio de compra
  LastTradePrice?: number; // Último precio de trade para el instrumento
  RejectReason?: string; // Si la orden fue rechazada, razón del rechazo
  IsLockedIn?: boolean; // true si es un block trade con confirmación unilateral
  CancelReason?: string; // Razón de cancelación si aplica
  OrderFlag?: string; // Opcional: Uno de "AddedToBook", "PostOnly", etc.
  UseMargin: boolean; // Por defecto siempre false (no soportado aún)
  StopPrice?: number; // Precio stop para trailing/stop orders
  PegPriceType?: string; // Tipo de precio para órdenes stop/trailing
  PegOffset?: number; // Offset de precio para órdenes stop/trailing
  PegLimitOffset?: number; // Offset límite en órdenes stop/trailing
  IpAddress?: string; // Dirección IP origen de la orden
  OMSId: number; // OMS asociado a la orden
}
