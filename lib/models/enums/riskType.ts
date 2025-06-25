// Enum para los valores posibles de RiskType
export enum RiskType {
  UNKNOWN = "Unknown", // Error o tipo de riesgo no definido
  NORMAL = "Normal", // Riesgo estándar
  NO_RISK_CHECK = "NoRiskCheck", // Sin chequeo de riesgo
  NO_TRADING = "NoTrading", // El usuario no puede operar
  CREDIT = "Credit", // Riesgo basado en crédito
}
