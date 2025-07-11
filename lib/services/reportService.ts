import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { CancelUserReportRequest } from "../models/request/cancelUserReport";
import { DownloadDocumentRequest } from "../models/request/downloadDocument";
import { DownloadDocumentSliceRequest } from "../models/request/downloadDocumentSlice";
import { GenerateActivityReportRequest } from "../models/request/generateTradeActivityReport";
import { GetUserReportTicketsRequest } from "../models/request/getUserReportTickets";
import { GetUserReportTicketsByStatusRequest } from "../models/request/getUserReportTicketsByStatus";
import { GetUserReportWriterResultRecordsRequest } from "../models/request/getUserReportWriterResultRecords";
import { RemoveUserReportTicket } from "../models/request/removeUserReportTicket";
import { ScheduleActivityReportRequest } from "../models/request/scheduleActivityReport";
import { Document } from "../models/response/downloadDocument";
import { DocumentSlice } from "../models/response/downloadDocumentSlice";
import { ActivityReport } from "../models/response/generateTradeActivityReport";
import { UserReportTicket } from "../models/response/getUserReportTicket";
import { UserReportWriterResultRecords } from "../models/response/getUserReportWriterResultRecords";
import { ScheduleActivityReport } from "../models/response/scheduleActivityReport";
import { completeParams } from "../utils/completeParams";

export class ReportService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#generatetradeactivityreport
   */
  generateTradeActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<ActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GENERATE_TRADE_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#generatetransactionactivityreport
   */
  generateTransactionActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<ActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GENERATE_TRANSACTION_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#generateproductdeltaactivityreport
   */
  generateProductDeltaActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<ActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#generatepnlactivityreport
   */
  generatePnLActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<ActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GENERATE_PNL_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#scheduletradeactivityreport
   */
  scheduleTradeActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SCHEDULE_TRADE_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#scheduletransactionactivityreport
   */
  scheduleTransactionActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SCHEDULE_TRANSACTION_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#scheduleproductdeltaactivityreport
   */
  scheduleProductDeltaActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#scheduleprofitandlossactivityreport
   */
  scheduleProfitAndLossActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReport> {
    const params = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/#canceluserreport
   */
  cancelUserReport(
    request: CancelUserReportRequest
  ): Promise<void> {
    return this.connection.apRequest(
      Endpoint.CANCEL_USER_REPORT,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getuserreportwriterresultrecords
   */
  getUserReportWriterResultRecords(
    request: GetUserReportWriterResultRecordsRequest
  ): Promise<UserReportWriterResultRecords[]> {
    return this.connection.apRequest(
      Endpoint.GET_USER_REPORT_WRITER_RESULT_RECORDS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getuserreporttickets
   */
  getUserReportTickets(
    request: GetUserReportTicketsRequest
  ): Promise<UserReportTicket[]> {
    return this.connection.apRequest(
      Endpoint.GET_USER_REPORT_TICKETS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#removeuserreportticket
   */
  removeUserReportTicket(
    request: RemoveUserReportTicket
  ): Promise<void> {
    return this.connection.apRequest(
      Endpoint.REMOVE_USER_REPORT_TICKET,
      RequestType.POST,
      request.UserReportTicketId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getuserreportticketsbystatus
   */
  getUserReportTicketsByStatus(
    request: GetUserReportTicketsByStatusRequest[]
  ): Promise<UserReportTicket[]> {
    return this.connection.apRequest(
      Endpoint.GET_USER_REPORT_TICKETS_BY_STATUS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#downloaddocument
   */
  downloadDocument(
    request: DownloadDocumentRequest
  ): Promise<Document> {
    return this.connection.apRequest(
      Endpoint.DOWNLOAD_DOCUMENT,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#downloaddocumentslice
   */
  downloadDocumentSlice(
    request: DownloadDocumentSliceRequest
  ): Promise<DocumentSlice> {
    return this.connection.apRequest(
      Endpoint.DOWNLOAD_DOCUMENT_SLICE,
      RequestType.POST,
      request
    );
  }
}
