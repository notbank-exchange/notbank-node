export interface GetLastTradesRequest {
  InstrumentId: number; // Required: ID of the instrument
  Count?: number; // Optional: Number of trades to return (default: 100)
}
