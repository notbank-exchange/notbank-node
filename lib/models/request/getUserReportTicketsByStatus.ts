import { ReportRequestStatus } from "../enums/reportRequestStatus";

export interface GetUserReportTicketsByStatusRequest {
  RequestStatus: ReportRequestStatus;
}
