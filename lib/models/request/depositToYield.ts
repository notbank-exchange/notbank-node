// ! #reunion: chequear tipos de miembros  (https://cryptomarket.atlassian.net/browse/CMKT-4546)
export interface DepositToYieldRequest {
  amount: number
  product_id: string
  type: "variable" | "stable"
}