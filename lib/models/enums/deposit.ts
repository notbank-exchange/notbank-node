export interface Deposit {
  OMSId: number; // ID del OMS
  DepositId: number; // ID del depósito
  AccountId: number; // ID de la cuenta
  SubAccountId: number; // ID del subcuenta (reservado para uso futuro)
  ProductId: number; // ID del producto
  Amount: number; // Monto del depósito
  LastUpdateTimeStamp: number; // Fecha de última actualización
  ProductType: string; // Tipo de producto (e.g., NationalCurrency, CryptoCurrency)
  TicketStatus: string; // Estado del depósito (FullyProcessed)
  DepositInfo: string; // Información adicional sobre el depósito
  DepositCode: string; // GUID del depósito
  TicketNumber: number; // Número del ticket (igual a DepositId)
  NotionalProductId: number; // ID del producto notional
  NotionalValue: number; // Valor notional del depósito
  FeeAmount: number; // Monto de la comisión
}
