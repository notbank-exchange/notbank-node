import { ServiceConnection } from "../core/serviceClient.js";
import { BasicVerificationResponse, EnumType, GetInstitutionalCompanySchemasRequest, GetInstitutionalMemberSchemesRequest, InstitutionalMember, TraderPlusVerificationSchemesRequest, VerificationStatus, VerificationStatusRequest, VerifyBasicRequest, VerifyInstitutionalCompanyRequest, VerifyInstitutionalDocumentRequest, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, VerifyTraderRequest } from "../models/index.js";
export declare class VerificationService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    verifyBasic(request: VerifyBasicRequest): Promise<BasicVerificationResponse>;
    verifyTrader(request: VerifyTraderRequest): Promise<void>;
    verifyTraderPlus(request: VerifyTraderPlusRequest): Promise<void>;
    getTraderPlusVerificationSchemes(request: TraderPlusVerificationSchemesRequest): Promise<any>;
    getInstitutionalCompanySchemes(request: GetInstitutionalCompanySchemasRequest): Promise<any>;
    verifyInstitutionalCompany(request: VerifyInstitutionalCompanyRequest): Promise<any>;
    getInstitutionalCompanyVerificationStatus(): Promise<any>;
    getInstitutionalMemberTypes(): Promise<EnumType[]>;
    getInstitutionalMemberSchemes(request: GetInstitutionalMemberSchemesRequest): Promise<any>;
    verifyInstitutionalMember(request: VerifyInstitutionalMemberRequest): Promise<any>;
    getInstitutionalMemberVerificationStatus(): Promise<InstitutionalMember[]>;
    getInstitutionalDocumentTypes(): Promise<EnumType[]>;
    verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<void>;
    getInstitutionalDocumentVerificationStatus(): Promise<any[]>;
    getVerificationStatus(request?: VerificationStatusRequest): Promise<VerificationStatus>;
}
