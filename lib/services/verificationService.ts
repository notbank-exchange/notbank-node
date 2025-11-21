import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { BasicVerificationResponse, EnumType, GetInstitutionalCompanySchemesRequest, GetInstitutionalMemberSchemesRequest, InstitutionalMember, TraderPlusVerificationSchemesRequest, VerificationStatus, VerificationStatusRequest, VerifyBasicRequest, VerifyInstitutionalCompanyRequest, VerifyInstitutionalDocumentRequest, VerifyInstitutionalMemberRequest, VerifyTraderPlusRequest, VerifyTraderRequest } from "../models";

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
    let { document_address_file, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_TRADER,
      [["document_address_file", document_address_file]],
      cleanRequest
    );
  }


  verifyTraderPlus(request: VerifyTraderPlusRequest): Promise<void> {
    let { files, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_TRADER_PLUS,
      files,
      cleanRequest
    );
  }

  getTraderPlusVerificationSchemes(request: TraderPlusVerificationSchemesRequest): Promise<any> {
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
    let { files, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      files,
      cleanRequest,
    );
  }

  getInstitutionalCompanyVerificationStatus(): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_COMPANY,
      RequestType.GET
    );
  }

  getInstitutionalMemberTypes(): Promise<EnumType[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS_TYPES,
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
    let { files, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_MEMBERS,
      files,
      cleanRequest,
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


  verifyInstitutionalDocument(request: VerifyInstitutionalDocumentRequest): Promise<void> {
    let { file, ...cleanRequest } = { ...request }
    return this.connection.nbFormDataRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      [["file", file]],
      cleanRequest
    );
  }

  getInstitutionalDocumentVerificationStatus(): Promise<any[]> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_INSTITUTIONAL_DOCUMENTS,
      RequestType.GET
    );
  }


  getVerificationStatus(request: VerificationStatusRequest = {}): Promise<VerificationStatus> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_STATUS,
      RequestType.GET,
      request
    );
  }
}
