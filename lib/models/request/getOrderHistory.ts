import { OrderState } from "../common/orderState";

export interface GetOrdersHistoryRequest {
  AccountId: number; // ID de cuenta
  OrderState?: OrderState; // Opcional: Estado de la orden
  OrderId?: number; // Opcional: ID de la orden
  ClientOrderId?: number; // Opcional: ID de orden del cliente
  OriginalOrderId?: number; // Opcional: ID de la orden original
  OriginalClientOrderId?: number; // Opcional: ID de cliente de la orden original
  UserId?: number; // Opcional: ID del usuario
  InstrumentId?: number; // Opcional: ID del instrumento
  StartTimestamp?: number; // Opcional: Marca de tiempo de inicio (POSIX)
  EndTimestamp?: number; // Opcional: Marca de tiempo de finalización (POSIX)
  Depth?: number; // Opcional: Máximo de órdenes por devolver
  Limit?: number; // Opcional: Máximo de órdenes por devolver (alias de Depth)
  StartIndex?: number; // Opcional: Índice de inicio para paginación
}
