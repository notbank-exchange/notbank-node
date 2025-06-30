export interface GetDepositFeeRequest {
  AccountId: number; // Obligatorio: ID de la cuenta haciendo el depósito.
  ProductId: number; // Obligatorio: ID del producto para el depósito.
  Amount: number; // Obligatorio: Monto del producto a ser depositado.
  AccountProviderId: number; // Obligatorio: ID del proveedor de cuenta asociado.
}
