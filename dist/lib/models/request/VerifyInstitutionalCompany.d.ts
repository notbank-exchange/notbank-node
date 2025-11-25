export interface VerifyInstitutionalCompanyRequest {
    country: string;
    declaration_template_id: string;
    document_type: string;
    user_id: string;
    files: [string, File][];
}
