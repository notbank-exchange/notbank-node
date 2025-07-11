import {
  NotbankError,
  StandardResponse
} from "../../models";

export class ApResponseHandler {
  public static async handle<T>(response: Response): Promise<T> {

    if (response.status >= 400 || response.status < 200) {
      throw new Error(
        `http error (${response.status
        }) not a successfull response. ${await ApResponseHandler.#getTextData(response)}`
      );
    }
    var jsonResponse = await ApResponseHandler.#getJsonData(response)
    if (!jsonResponse) {
      throw new NotbankError("http error. (status=" + response.status + ")", -1)
    }
    var standardResponse = jsonResponse as StandardResponse;
    if (
      standardResponse?.result === false &&
      standardResponse?.errorcode != null
    ) {
      throw NotbankError.Factory.createFromApResponse(standardResponse);
    }
    return jsonResponse as T;
  }

  static async #getJsonData(response: Response): Promise<any> {
    try {
      return await response.json();
    } catch (err) {
      return null;
    }
  }

  static async #getTextData(response: Response): Promise<any> {
    try {
      return await response.text();
    } catch (err) {
      return null;
    }
  }
}
