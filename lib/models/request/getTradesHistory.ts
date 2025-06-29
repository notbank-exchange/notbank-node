export interface GetTradesHistoryRequest {
  AccountId?: number; // Opcional: ID de la cuenta
  InstrumentId?: number; // Opcional: ID del instrumento
  TradeId?: number; // Opcional: ID del comercio específico
  OrderId?: number; // Opcional: ID de la orden
  UserId?: number; // Opcional: ID del usuario
  StartTimeStamp?: number; // Opcional: Marca de tiempo de inicio en formato POSIX
  EndTimeStamp?: number; // Opcional: Marca de tiempo de fin en formato POSIX
  Depth?: number; // Opcional: Cantidad de registros a devolver desde StartIndex
  StartIndex?: number; // Opcional: Índice inicial de los registros
  ExecutionId?: number; // Opcional: ID de la ejecución específica
}
