export interface SubscribeOrderStateEventsRequest {
  AccountId: number; // ID of the account (required)
  InstrumentId?: number; // ID of the instrument (optional, filter)
}
