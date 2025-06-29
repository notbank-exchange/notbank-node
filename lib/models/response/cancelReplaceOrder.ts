export interface CancelReplaceOrderResponse {
  ReplacementOrderId: number; // ID de la nueva orden
  ReplacementClOrdId: number; // ID del cliente asignado a la nueva orden
  OrigOrderId: number; // ID de la orden original (reemplazada)
  OrigClOrdId: number; // ID del cliente asignado a la orden original
}
