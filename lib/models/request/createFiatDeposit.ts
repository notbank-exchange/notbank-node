export interface CreateFiatDepositRequest {
  account_id: number
  payment_method: number
  currency: string
  amount: number
  bank_account_id?: string
  voucher?: string
}