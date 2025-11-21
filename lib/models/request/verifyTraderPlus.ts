export interface VerifyTraderPlusRequest {
  user_id?: string
  declaration: any
  files: [string, File][]
}