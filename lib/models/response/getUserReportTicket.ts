import { ReportFlavor } from "../enums/reportFlavor";
import { ReportFrequency } from "../enums/reportFrequency";
import { ReportRequestStatus } from "../enums/reportRequestStatus";

export interface UserReportTicket {
  RequestingUser: number;
  OMSId: number;
  reportFlavor: ReportFlavor;
  createTime: string;
  initialRunTime: string;
  intervalStartTime: string;
  intervalEndTime: string;
  RequestStatus: ReportRequestStatus;
  ReportFrequency: ReportFrequency;
  intervalDuration: number;
  RequestId: string;
  lastInstanceId: string | null;
  accountIds: number[];
}
