export interface VerifyInstitutionalCompanyRequest {
  country: string
  declaration_template_id: string
  document_type: string
  user_id: string
  // ! #reunion 
  // ? what is asset_XX (https://cryptomarket.atlassian.net/browse/CMKT-4522)
}