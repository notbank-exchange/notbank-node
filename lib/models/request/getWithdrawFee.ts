export interface GetWithdrawFeeRequest {
  AccountId: number; // Obligatorio: ID de la cuenta solicitante.
  ProductId: number; // Obligatorio: ID del producto a retirar.
  Amount: number; // Obligatorio: Monto del producto a retirar.
  AccountProviderId?: number; // Opcional: ID del proveedor de cuenta (si aplica).
}
