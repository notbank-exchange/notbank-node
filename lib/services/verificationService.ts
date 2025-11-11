import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { BasicVerification, BasicVerificationResponse, GetInstitutionalCompanySchemesRequest, GetInstitutionalMemberSchemesRequest, InstitutionalCompanyVerificationRequest, InstitutionalMember, InstitutionalMemberVerificationRequest, TraderPlusVerification, TraderPlusVerificationSchema, TraderVerification, VerificationStatus, VerificationStatusRequest } from "../models";

export class VerificationService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  verifyBasic(request: BasicVerification): Promise<BasicVerificationResponse> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_BASIC,
      RequestType.POST,
      request
    );
  }

  verifyTrader(request: TraderVerification): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER,
      RequestType.POST,
      request
    );
  }


  verifyTraderPlus(request: TraderPlusVerification): Promise<void> {
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

  // ! #reunion: does not have an external url, using internal (django-labeled)
  getInstitutionalCompanySchemes(request: GetInstitutionalCompanySchemesRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY_SCHEMES,
      RequestType.GET,
      request
    );
  }


  verifyInstitutionalCompany(request: InstitutionalCompanyVerificationRequest): Promise<any> {
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

  verifyInstitutionalMember(request: InstitutionalMemberVerificationRequest): Promise<any> {
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


  getInsitutionalDocumentSchemes(): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS_SCHEMES,
      RequestType.GET
    );
  }


  verifyInstitutionalDocument(request: InstitutionalMemberVerificationRequest): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      RequestType.POST,
      request
    );
  }

  getInstitutionalDocumentVerificationStatus(): Promise<InstitutionalMember[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      RequestType.GET
    );
  }


  getVerificationStatus(request: VerificationStatusRequest): Promise<VerificationStatus> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_STATUS,
      RequestType.GET
    );
  }
}
