export interface GetTransactionsRequest {
  from_date: string
  to_date: string
  sort: string
  currency: string
  page: number
  page_size: number
}