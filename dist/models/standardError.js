import { NotbankError } from "./notbankError.js";
export class StandardError extends NotbankError {
    constructor(standardResponse) {
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
