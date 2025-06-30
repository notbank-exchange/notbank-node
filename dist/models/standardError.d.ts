import { NotbankError } from "./notbankError.js";
import { StandardResponse } from "./standardResponse.js";
export declare class StandardError extends NotbankError {
    errormsg: string;
    errorcode: number;
    detail: string;
    constructor(standardResponse: StandardResponse);
}
