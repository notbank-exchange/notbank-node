import { NbResponse } from "../../models/nbResponse";
import { NotbankError } from "../../models/notbankError";
import { Response } from 'node-fetch';


export class NbResponseHandler {
  public static async handle<T>(response: Response, paged: boolean): Promise<T> {
    try {
      var jsonResponse = await NbResponseHandler.#getData(response);
      if (!jsonResponse) {
        throw new NotbankError("http error. (status=" + response.status + ")", -1)
      }
      var nbResponse = jsonResponse as NbResponse;
      if (nbResponse?.status === 'success') {
        return paged ? jsonResponse as T : nbResponse.data as T
      }
      const error = NotbankError.Factory.createFromNbResponse(nbResponse, response.status);
      throw error;
    } catch (error) {
      throw error; // Re-lanza el error
    }
  }

  static async #getData(response: Response): Promise<any> {
    try {
      const data = await response.json();
      return data
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
