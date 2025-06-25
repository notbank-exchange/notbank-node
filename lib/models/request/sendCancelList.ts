// Modelo para cancelar una orden
export interface CancelOrder {
  OrderId: number; // Obligatorio: ID de la orden a cancelar
  AccountId: number; // Obligatorio: ID de la cuenta asociada a la orden
}

// Arreglo de órdenes a cancelar
export type SendCancelListRequest = CancelOrder[];
