export interface ModifyOrderRequest {
  OrderId: number; // ID of the order to modify (required)
  InstrumentId: number; // ID of the instrument (required)
  Quantity: number; // New quantity (must be <= current quantity) (required)
  AccountId: number; // ID of the account (required)
}
