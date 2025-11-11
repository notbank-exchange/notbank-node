export interface BasicVerificationResponse {
  verificationId: string
  identity: string
  flowId: string
  // ! #reunion
  // ? can we have all camelCase or all snake_case ?
  metamap_url: string
}