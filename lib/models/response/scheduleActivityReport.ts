import { ReportFlavor } from "../enums/reportFlavor";
import { ReportFrequency } from "../enums/reportFrequency";
import { ReportRequestStatus } from "../enums/reportRequestStatus";

export interface ScheduleActivityReportResponse {
  RequestingUser: number;
  OMSId: number;
  reportFlavor: ReportFlavor;
  createTime: string; // format ISO 8601
  initialRunTime: string; // format ISO 8601
  intervalStartTime: string; // format ISO 8601
  intervalEndTime: string; // format ISO 8601
  RequestStatus: ReportRequestStatus;
  ReportFrequency: ReportFrequency;
  intervalDuration: number;
  RequestId: string;
  lastInstanceId: string;
  accountIds: number[];
}
