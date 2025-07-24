export interface CreateFiatWithdrawRequest {
  account_id: string
  payment_method: number
  currency: number
  amount: number
  bank_account_id?: string
  cbu?: string
  person_type?: string
  cuit?: string
  name?: string
}