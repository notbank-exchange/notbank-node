import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { ReportRequestStatus } from "../models/enums/reportRequestStatus";
import { CancelUserReportRequest } from "../models/request/cancelUserReport";
import { DownloadDocumentRequest } from "../models/request/downloadDocument";
import { DownloadDocumentSliceRequest } from "../models/request/downloadDocumentSlice";
import { GenerateActivityReportRequest } from "../models/request/generateTradeActivityReport";
import { GetUserReportTicketsRequest } from "../models/request/getUserReportTickets";
import { GetUserReportTicketsByStatusRequest } from "../models/request/getUserReportTicketsByStatus";
import { GetUserReportWriterResultRecordsRequest } from "../models/request/getUserReportWriterResultRecords";
import { ScheduleActivityReportRequest } from "../models/request/scheduleActivityReport";
import { CancelUserReportResponse } from "../models/response/cancelUserReport";
import { DownloadDocumentResponse } from "../models/response/downloadDocument";
import { DownloadDocumentSliceResponse } from "../models/response/downloadDocumentSlice";
import { GenerateActivityReportResponse } from "../models/response/generateTradeActivityReport";
import { UserReportTicket } from "../models/response/getUserReportTicket";
import { GetUserReportTicketsByStatusResponse } from "../models/response/getUserReportTicketsByStatus";
import { GetUserReportWriterResultRecordsResponse } from "../models/response/getUserReportWriterResultRecords";
import { RemoveUserReportTicketResponse } from "../models/response/removeUserReportTicket";
import { ScheduleActivityReportResponse } from "../models/response/scheduleActivityReport";

import { completeParams } from "../utils/completeParams";

export class ReportService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  public async generateTradeActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<GenerateActivityReportResponse> {
    this.validateReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.GENERATE_TRADE_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as GenerateActivityReportResponse;
  }

  public async generateTransactionActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<GenerateActivityReportResponse> {
    this.validateReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.GENERATE_TRANSACTION_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as GenerateActivityReportResponse;
  }

  public async generateProductDeltaActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<GenerateActivityReportResponse> {
    this.validateReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.GENERATE_PRODUCT_DELTA_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as GenerateActivityReportResponse;
  }

  public async generatePnLActivityReport(
    request: GenerateActivityReportRequest
  ): Promise<GenerateActivityReportResponse> {
    this.validateReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.GENERATE_PNL_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as GenerateActivityReportResponse;
  }

  public async scheduleTradeActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReportResponse> {
    this.validateScheduleReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.SCHEDULE_TRADE_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as ScheduleActivityReportResponse;
  }

  public async scheduleTransactionActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReportResponse> {
    this.validateScheduleReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.SCHEDULE_TRANSACTION_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as ScheduleActivityReportResponse;
  }

  public async scheduleProductDeltaActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReportResponse> {
    this.validateScheduleReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.SCHEDULE_PRODUCT_DELTA_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as ScheduleActivityReportResponse;
  }

  public async scheduleProfitAndLossActivityReport(
    request: ScheduleActivityReportRequest
  ): Promise<ScheduleActivityReportResponse> {
    this.validateScheduleReportRequest(request);

    const params = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.SCHEDULE_PROFIT_AND_LOSS_ACTIVITY_REPORT,
      RequestType.POST,
      params
    );

    return response as ScheduleActivityReportResponse;
  }

  public async cancelUserReport(
    request: CancelUserReportRequest
  ): Promise<CancelUserReportResponse> {
    if (!request.UserReportId || typeof request.UserReportId !== "string") {
      throw new Error("UserReportId is required and must be a string.");
    }

    const response = await this.connection.apRequest(
      Endpoint.CANCEL_USER_REPORT,
      RequestType.POST,
      request
    );

    return response as CancelUserReportResponse;
  }

  public async getUserReportWriterResultRecords(
    request: GetUserReportWriterResultRecordsRequest
  ): Promise<GetUserReportWriterResultRecordsResponse[]> {
    if (request.UserId == null || typeof request.UserId !== "number") {
      throw new Error("UserId is required and must be a number.");
    }

    if (
      request.Depth != null &&
      (typeof request.Depth !== "number" || request.Depth < 0)
    ) {
      throw new Error("Depth must be a non-negative number.");
    }

    if (
      request.StartIndex != null &&
      (typeof request.StartIndex !== "number" || request.StartIndex < 0)
    ) {
      throw new Error("StartIndex must be a non-negative number.");
    }

    const response = await this.connection.apRequest(
      Endpoint.GET_USER_REPORT_WRITER_RESULT_RECORDS,
      RequestType.POST,
      request
    );

    return response as GetUserReportWriterResultRecordsResponse[];
  }

  public async getUserReportTickets(
    request: GetUserReportTicketsRequest
  ): Promise<UserReportTicket[]> {
    if (request.UserId == null || typeof request.UserId !== "number") {
      throw new Error("UserId is required and must be a number.");
    }

    const response = await this.connection.apRequest(
      Endpoint.GET_USER_REPORT_TICKETS,
      RequestType.POST,
      request
    );

    return response as UserReportTicket[];
  }

  public async removeUserReportTicket(
    userReportTicketId: string
  ): Promise<RemoveUserReportTicketResponse> {
    if (!userReportTicketId || typeof userReportTicketId !== "string") {
      throw new Error("userReportTicketId must be a string.");
    }

    const response = await this.connection.apRequest(
      Endpoint.REMOVE_USER_REPORT_TICKET,
      RequestType.POST,
      userReportTicketId
    );

    return response as RemoveUserReportTicketResponse;
  }

  public async getUserReportTicketsByStatus(
    request: GetUserReportTicketsByStatusRequest[]
  ): Promise<GetUserReportTicketsByStatusResponse> {
    if (
      !Array.isArray(request) ||
      request.length === 0 ||
      request.some(
        item =>
          typeof item?.RequestStatus !== "string" ||
          !(item.RequestStatus in ReportRequestStatus)
      )
    ) {
      throw new Error(
        "Request must be a non-empty array of objects with valid RequestStatus values."
      );
    }

    const response = await this.connection.apRequest(
      Endpoint.GET_USER_REPORT_TICKETS_BY_STATUS,
      RequestType.POST,
      request
    );

    return response as GetUserReportTicketsByStatusResponse;
  }

  public async downloadDocument(
    request: DownloadDocumentRequest
  ): Promise<DownloadDocumentResponse> {
    if (!request.DescriptorId || typeof request.DescriptorId !== "string") {
      throw new Error("DescriptorId is required and must be a string.");
    }

    const response = await this.connection.apRequest(
      Endpoint.DOWNLOAD_DOCUMENT,
      RequestType.POST,
      request
    );

    return response as DownloadDocumentResponse;
  }

  public async downloadDocumentSlice(
    request: DownloadDocumentSliceRequest
  ): Promise<DownloadDocumentSliceResponse> {
    if (!request.DescriptorId || typeof request.DescriptorId !== "string") {
      throw new Error("DescriptorId is required and must be a string.");
    }

    if (
      request.sliceNum != null &&
      (typeof request.sliceNum !== "number" || request.sliceNum < 0)
    ) {
      throw new Error("sliceNum must be a non-negative number if provided.");
    }

    const response = await this.connection.apRequest(
      Endpoint.DOWNLOAD_DOCUMENT_SLICE,
      RequestType.POST,
      request
    );

    return response as DownloadDocumentSliceResponse;
  }

  private validateReportRequest(request: GenerateActivityReportRequest): void {
    if (
      !Array.isArray(request.accountIdList) ||
      request.accountIdList.some(id => typeof id !== "number")
    ) {
      throw new Error("accountIdList must be an array of numbers.");
    }

    if (
      typeof request.startTime !== "string" ||
      typeof request.endTime !== "string"
    ) {
      throw new Error("startTime and endTime must be strings.");
    }
  }

  private validateScheduleReportRequest(
    request: ScheduleActivityReportRequest
  ): void {
    if (
      !Array.isArray(request.accountIdList) ||
      request.accountIdList.some((id: number) => typeof id !== "number")
    ) {
      throw new Error("accountIdList must be an array of numbers.");
    }

    if (typeof request.beginTime !== "string") {
      throw new Error("beginTime must be a string.");
    }

    if (
      request.frequency != null &&
      typeof request.frequency !== "string" &&
      typeof request.frequency !== "number"
    ) {
      throw new Error("frequency must be a string or number");
    }
  }
}
