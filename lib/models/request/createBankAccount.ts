export interface CreateBankAccountRequest {
  country: string
  bank: string
  number: string
  kind: string
  pix_type?: string
  agency?: string
  dv?: string
  province?: string
}