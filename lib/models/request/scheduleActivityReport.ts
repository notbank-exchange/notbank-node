import { ReportFrequency } from "../enums/reportFrequency";

export interface ScheduleActivityReportRequest {
  accountIdList: number[]; // Required
  beginTime: string; // format ISO 8601
  frequency?: ReportFrequency | number | string; // Optional
}
