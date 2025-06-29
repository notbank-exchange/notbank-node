import { ErrorCode } from "../constants/errorCode";

export interface StandardResponse {
  result: boolean;
  errormsg: string;
  errorcode: ErrorCode;
  statusCode: number;
  detail: string;
}
