export interface DeleteWhitelistedAddressRequest {
  whitelistedAddressId: string;
  account_id: number;
  otp: string;
}
