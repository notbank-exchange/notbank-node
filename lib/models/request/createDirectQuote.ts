export interface CreateDirectQuoteRequest {
  account_id: number
  from_currency: string
  from_amount: string
  to_currency: string
  operation: string

}