export interface SubscribeTradesRequest {
  InstrumentId: number; // ID of the instrument (required)
  IncludeLastCount: number; // Number of previous trades to retrieve (required)
}
