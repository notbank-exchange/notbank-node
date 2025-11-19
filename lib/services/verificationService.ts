import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { VerifyBasicRequest, BasicVerificationResponse, GetInstitutionalCompanySchemesRequest, GetInstitutionalMemberSchemesRequest, VerifyInstitutionalCompanyRequest, InstitutionalMember, EnumType, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, TraderPlusVerificationSchema, VerifyTraderRequest, VerificationStatus, VerificationStatusRequest, VerifyInstitutionalDocumentRequest } from "../models";

export class VerificationService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  verifyBasic(request: VerifyBasicRequest): Promise<BasicVerificationResponse> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_BASIC,
      RequestType.POST,
      request
    );
  }

  verifyTrader(request: VerifyTraderRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER,
      RequestType.POST,
      request
    );
  }


  verifyTraderPlus(request: VerifyTraderPlusRequest): Promise<void> {
    let message = { user_id: request.user_id, declaration: request.declaration }
    for (let i = 0; request.files && i < request.files.length; i++) {
      message["file_" + i] = request.files[i]
    }
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER_PLUS,
      RequestType.POST,
      message
    );
  }

  getTraderPlusVerificationSchema(request: TraderPlusVerificationSchema): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER_PLUS_SCHEMES,
      RequestType.GET,
      request
    );
  }

  getInstitutionalCompanySchemes(request: GetInstitutionalCompanySchemesRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMES,
      RequestType.GET,
      request
    );
  }


  verifyInstitutionalCompany(request: VerifyInstitutionalCompanyRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      RequestType.POST,
      request
    );
  }

  getInstitutionalCompanyVerificationStatus(): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      RequestType.GET
    );
  }

  getInstitutionalMemberSchemes(request: GetInstitutionalMemberSchemesRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_SCHEMES,
      RequestType.GET,
      request
    );
  }

  verifyInstitutionalMember(request: VerifyInstitutionalMemberRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      RequestType.POST,
      request
    );
  }

  getInstitutionalMemberVerificationStatus(): Promise<InstitutionalMember[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      RequestType.GET
    );
  }


  // ! #reunion
  // https://cryptomarket.atlassian.net/browse/CMKT-4188
  // * endpoint and method should be named institutional document type, just as insitutional membre types is called (https://cryptomarket.atlassian.net/browse/CMKT-4205)
  getInstitutionalDocumentSchemes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_SCHEMES,
      RequestType.GET
    );
  }


  verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      RequestType.POST,
      request
    );
  }

  getInstitutionalDocumentVerificationStatus(): Promise<any[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      RequestType.GET
    );
  }


  getVerificationStatus(request: VerificationStatusRequest): Promise<VerificationStatus> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_STATUS,
      RequestType.GET,
      request
    );
  }


  getInstitutionalMemberTypes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES,
      RequestType.GET
    );
  }
}
