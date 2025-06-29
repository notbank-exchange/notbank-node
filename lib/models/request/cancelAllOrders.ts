// Modelo de solicitud para cancelar todas las órdenes
export interface CancelAllOrdersRequest {
  AccountId?: number; // Opcional: ID de la cuenta. Si no se especifica, cancelará todas las cuentas
  InstrumentId?: number; // Opcional: ID del instrumento. Si no se especifica, cancelará todos los instrumentos
}
