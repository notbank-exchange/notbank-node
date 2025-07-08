export interface AddWhitelistedAddressRequest {
  accountId: number
  currency: string
  network: string
  address: string
  label: string
  memoOrTag: string
  otp: string
}