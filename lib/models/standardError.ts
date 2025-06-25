import { NotbankError } from "./notbankError";
import { StandardResponse } from "./standardResponse";

export class StandardError extends NotbankError {
  errormsg: string;
  errorcode: number;
  detail: string;

  constructor(standardResponse: StandardResponse) {
    var errMsg = `Standard Error (code=${standardResponse.errorcode})`;
    if (standardResponse.errormsg) {
      errMsg += ". " + standardResponse.errormsg;
    }
    if (standardResponse.detail) {
      errMsg += ". " + standardResponse.detail;
    }
    super(errMsg);
    this.errorcode = standardResponse.errorcode || standardResponse.statusCode;
    this.errormsg = standardResponse.errormsg;
    this.detail = standardResponse.detail;
  }
}
