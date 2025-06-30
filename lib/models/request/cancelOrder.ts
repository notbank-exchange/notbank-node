// Modelo de solicitud para cancelar una orden
export interface CancelOrderRequest {
  AccountId?: number; // Opcional: ID de la cuenta (requerido si el usuario no está asociado con la cuenta)
  OrderId?: number; // Opcional: ID de la orden a cancelar (requerido si ClOrderId no está especificado)
  ClOrderId?: number; // Opcional: ID de cliente para la orden a cancelar (requerido si OrderId no está especificado)
}
