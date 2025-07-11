import { ChangeReason } from "../enums/changeReason";
import { OrderTypeInt } from "../enums/orderType";
import { SideType } from "../enums/sideType";

/**
 * OpenOrder:
 * Representa una orden abierta devuelta por el API de GetOpenOrders.
 */
export interface OpenOrder {
  Side: SideType; // "Buy" o "Sell"
  OrderId: number; // ID de la orden
  Price: number; // Precio limite / stop / etc.
  Quantity: number; // Cantidad remanente
  DisplayQuantity: number; // Cantidad "mostrada" en el book
  Instrument: number; // InstrumentId
  Account: number; // Cuenta que posee la orden
  AccountName: string; // Nombre de la cuenta
  OrderType: OrderTypeInt; // Tipo de orden
  ClientOrderId: number; // ID asignado por el cliente
  OrderState: string; // Estado actual de la orden (ej. "Working")
  ReceiveTime: number; // Timestamp en POSIX x 1000
  ReceiveTimeTicks: number; // Timestamp en formato Ticks
  LastUpdatedTime: number; // Última actualización (POSIX x 1000)
  LastUpdatedTimeTicks: number; // Última actualización (Ticks)
  OrigQuantity: number; // Cantidad original
  QuantityExecuted: number; // Cant. ejecutada
  GrossValueExecuted: number; // Monto total ejecutado
  ExecutableValue: number; // Generalmente 0
  AvgPrice: number; // Precio promedio de ejecución
  CounterPartyId: number; // Contraparte
  ChangeReason: ChangeReason; // Razón de cambio de estado
  OrigOrderId: number; // Orden original si es de reemplazo
  OrigClOrdId: number; // ClientOrderId original si es de reemplazo
  EnteredBy: number; // ID del usuario que envió la orden
  UserName: string; // Nombre del usuario
  IsQuote: boolean; // true si es quote, de lo contrario false
  InsideAsk: number; // inside ask price
  InsideAskSize: number; // tamaño del inside ask
  InsideBid: number; // inside bid price
  InsideBidSize: number; // tamaño del inside bid
  LastTradePrice: number; // último precio de trade
  RejectReason: string; // razón del rechazo si la hay
  IsLockedIn: boolean; // true si es un block trade con confirmación unilateral
  CancelReason: string; // razón de cancelación si la hay
  OrderFlag: string; // banderas de la orden (ej. "AddedToBook")
  UseMargin: boolean; // no soportado, default false
  StopPrice: number; // precio stop
  PegPriceType: string; // tipo de peg (ej. "Ask")
  PegOffset: number; // offset para trailing/stop
  PegLimitOffset: number; // offset limit en trailing/stop
  IpAddress: string | null; // IP
  IPv6a: number; // placeholder IPv6
  IPv6b: number; // placeholder IPv6
  ClientOrderIdUuid?: string | null; // Uuid en caso de no usar numérico
  OMSId: number; // ID del OMS
}
