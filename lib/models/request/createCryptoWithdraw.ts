export interface CreateCryptoWithdrawRequest {
  accountId: number
  currency: string
  network: string
  address: string
  amount: string
  memoOrTag: string
  otp: string
}