export interface GenerateActivityReportRequest {
  accountIdList: number[];  // Required
  startTime: string;        // Required, format ISO 8601
  endTime: string;          // Required, format ISO 8601
}
