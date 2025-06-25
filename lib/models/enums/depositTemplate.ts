export interface DepositTemplate {
  ProviderType: string; // Tipo de proveedor (e.g., BitgoRPC, Fireblocks)
  Template: string; // Plantilla de depósito como string JSON
  ProcessInfo: string; // Información del proceso
  UseGetDepositWorkflow: boolean; // ¿Usar flujo de depósito?
  DepositWorkflow: string; // Flujo de depósito (e.g., ManualDeposit, CryptoWallet)
}
