import { NbResponse } from "../../models/nbResponse";
import { NotbankError } from "../../models/notbankError";


export class NbResponseHandler {
  public static async handle<T>(response: Response, paged: boolean): Promise<T> {
    var jsonResponse = await NbResponseHandler.#getData(response);
    if (!jsonResponse) {
      throw new NotbankError("http error. (status=" + response.status + ")", -1)
    }
    var nbResponse = jsonResponse as NbResponse;
    if (nbResponse?.status === 'success') {
      return paged ? jsonResponse as T : nbResponse.data as T
    }
    throw NotbankError.Factory.createFromNbResponse(nbResponse);
  }

  static async #getData(response: Response): Promise<any> {
    try {
      return await response.json();
    } catch (err) {
      return null;
    }
  }
}
