import { ReportWriterResultStatus } from "../enums/reportWriterResultStatus";

export interface GetUserReportWriterResultRecordsResponse {
  RequestingUser: number;
  urtTicketId: string;
  descriptorId: string;
  resultStatus: ReportWriterResultStatus;
  reportExecutionStartTime: string;
  reportExecutionCompleteTime: string;
  reportOutputFilePathname: string;
  reportDescriptiveHeader: string;
}
