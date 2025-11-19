export interface BasicVerificationResponse {
  verificationId: string
  identity: string
  flowId: string
  // ! #reunion - pending from 11 nov - to be handled after deploy of endpoints, before deploy of documentation
  // * can we have all camelCase or all snake_case 
  metamap_url: string
}