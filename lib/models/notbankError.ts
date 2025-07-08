import { StandardResponse as StandardApResponse } from "./standardResponse";

export class NotbankError extends Error {
  errormsg: string;
  errorcode: number;
  detail: string;

  constructor(message: string, errorcode: number, detail: string) {
    super(message)
  }

  static create(standardResponse: StandardApResponse) {
    var errMsg = `Notbank Error (code=${standardResponse.errorcode})`;
    if (standardResponse.errormsg) {
      errMsg += ". " + standardResponse.errormsg;
    }
    if (standardResponse.detail) {
      errMsg += ". " + standardResponse.detail;
    }
    return new NotbankError(
      standardResponse.errormsg,
      standardResponse.errorcode || standardResponse.statusCode,
      standardResponse.detail,
    )
  }
}
