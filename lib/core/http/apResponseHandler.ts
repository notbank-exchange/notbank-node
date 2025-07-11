import {
  NotbankError,
  StandardResponse
} from "../../models";

export class ApResponseHandler {
  public static async handle<T>(response: Response): Promise<T> {
    if (response.status >= 300 || response.status < 200) {
      throw new Error(
        `http error (${response.status
        }) not a successfull response. ${response.text()}`
      );
    }
    var jsonResponse = await response.json();
    var standardResponse = jsonResponse as StandardResponse;
    if (
      standardResponse?.result === false &&
      standardResponse?.errorcode != null
    ) {
      throw NotbankError.Factory.createFromApResponse(standardResponse);
    }
    return jsonResponse as T;
  }
}
