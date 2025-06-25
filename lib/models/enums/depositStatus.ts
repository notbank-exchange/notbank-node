// Estados posibles para el depósito
export enum DepositStatus {
  New = "New", // El depósito se crea en estado "Nuevo".
  Pending = "Pending", // Depósito en progreso.
  FullyProcessed = "FullyProcessed", // Depósito completado.
  Error = "Error", // Depósito con error.
}
