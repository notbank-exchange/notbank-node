export interface SendOrderResponse {
  OrderId: number; // ID único asignado a la orden
  InstrumentId: number; // ID del instrumento de la orden
  OMSId: number; // OMS donde se procesó la orden
  AccountId: number; // ID de la cuenta usada para esta orden
  Status: string; // Resultado de la orden (SUCCESS o ERROR)
  Message?: string; // Detalles del error (cuando Status = ERROR)
}
