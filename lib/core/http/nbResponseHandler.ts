import { NotbankError } from "../../models/notbankError";


interface StandadResponse {
  status: string
  message?: string
  data: any
}


export class NbResponseHandler {
  public static async handle<T>(response: Response, paged: boolean): Promise<T> {
    if (response.status >= 300 || response.status < 200) {
      throw new Error(
        `http error (${response.status
        }) not a successfull response. ${response.text()}`
      );
    }
    var jsonResponse = await response.json();
    var standardResponse = jsonResponse as StandadResponse;
    if (standardResponse.status !== 'success') {
      throw new NotbankError(standardResponse.message, 0, "")
    }
    return paged ? jsonResponse as T : standardResponse.data as T
  }
}
